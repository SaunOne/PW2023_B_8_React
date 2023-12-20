import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Container,
  Spinner,
  Button,
  Modal,
} from "react-bootstrap";
import { Steps } from 'rsuite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "../css/Payment.css";
import { GetUserById } from "../../api/apiUsers";
import { GetTransaksiLaundryById } from "../../api/apiTransaksiLaundry";
import { GetAllJenisPengambilan } from "../../api/apiJenisPengambilan";
import { GetAllLayanan } from "../../api/apiLayanan";
import { GetTransaksiTambahanByIdTransaksi } from "../../api/apiTransaksiTambahan";
import { GetAllItems } from "../../api/apiItem";
import { BayarTransaksiLaundry } from "../../api/apiTransaksiLaundry";
import { Pembayaran } from "../../api/apiDeposit";

const Payment = () => {
  const [detailTransaksi, setShowDetailTransaksi] = useState(null);
  const [userData, setUserData] = useState(null);
  const [jenisPengambilan, setJenisPengambilan] = useState([]);
  const [layanan, setLayanan] = useState([]);
  const [transaksiTambahan, setTransaksiTambahan] = useState([]);
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await GetUserById(sessionStorage.getItem("id_user"));
        setUserData(userData);

        const detailTransaksiData = await GetTransaksiLaundryById(sessionStorage.getItem("id_transaksi"));
        setShowDetailTransaksi([detailTransaksiData]);

        const jenisPengambilanData = await GetAllJenisPengambilan();
        setJenisPengambilan(jenisPengambilanData);

        const layananData = await GetAllLayanan();
        setLayanan(layananData);

        const transaksiTambahanData = await GetTransaksiTambahanByIdTransaksi(sessionStorage.getItem("id_transaksi"));
        setTransaksiTambahan(transaksiTambahanData);

        const itemsData = await GetAllItems();
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   if (detailTransaksi) {
  //     handlePayment();
  //   }
  // }, [detailTransaksi]);

  const handlePayment = async () => {
    try {
      await BayarTransaksiLaundry(sessionStorage.getItem("id_transaksi"));
      const newPembayaran = {
        jumlah: detailTransaksi[0].total_harga, 
      };
      console.log(newPembayaran);
      await Pembayaran(newPembayaran);
      setShowModal(true);
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  const handleBayarNanti = () => {
    navigate('/user');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user');
  };

  if (!detailTransaksi || !userData || !transaksiTambahan || !jenisPengambilan || !layanan || !items) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <div className="container steps" style={{ maxWidth: "30%" }}>
        <Steps current={1}>
          <Steps.Item title="Pilih Layanan" />
          <Steps.Item title="Payment Page" />
        </Steps>
      </div>
      <div className="row">
        <div className="col-8 cont-1">
          <Container className="cont-payment mb-5">
            <div className="row">
              <h4 className="d-flex"><strong>DETAIL PEMBAYARAN</strong></h4>
            </div>
            <div className="row mt-5">
              <Form id="walletForm">
                <h5 style={{ color: "#014E87" }} className="form-label d-flex"><FontAwesomeIcon icon={faWallet} /><strong>Jumlah Saldo</strong></h5>
                {/* <input type="text" className="form-control form-control-lg" id="wallet" name="wallet"
                  value='IDR ${user.saldo}' readOnly /> */}
                <h3 className="d-flex mt-2" style={{ color: "#014E87" }}>IDR {userData.saldo}.00</h3>
              </Form>
            </div>
            <div className="mt-4 d-flex justify-content-end">
              {/* <a href="" type="button" className="btn btn-back">Kembali</a>
              <a type="button" className="btn btn-next">Bayar</a> */}
              <Button onClick={handlePayment}>
                Bayar Sekarang
              </Button>
              <Button onClick={handleBayarNanti}>
                Bayar Nanti
              </Button>
            </div>
          </Container>
        </div>

        <div className="col-4">
          <div className="container cont-table mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-start" colSpan="2">Detail Pesanan</th>
                </tr>
              </thead>
              {detailTransaksi.map((detail) => (
                <tbody key={detail.id_transaksi_laundry}>
                  <tr>
                    <th className="text-start">ID Transaksi</th>
                    <td className="text-start">{detail.id_transaksi_laundry}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Alamat</th>
                    <td className="text-start">{userData.alamat}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Layanan</th>
                    <td className="text-start">
                      {layanan.find((service) => service.id_layanan === detail.id_layanan)?.nama_layanan}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-start">Jenis Pengambilan</th>
                    <td className="text-start">
                      {jenisPengambilan.find((jenis) => jenis.id_jenis_pengambilan === detail.id_jenis_pengambilan)?.nama_jenis_pengambilan}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-start">Berat Cucian (Kg)</th>
                    <td className="text-start">{detail.berat} Kg</td>
                  </tr>
                  <tr>
                    <th className="text-start">Item Tambahan</th>
                    <td className="text-start">
                      {transaksiTambahan.map((tambahan) => (
                        <div key={tambahan.id_transaksi_tambahan}>
                          {items.find((item) => item.id_item === tambahan.id_item)?.nama_item} ({tambahan.jumlah}) <br />
                        </div>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-start">Total Harga</th>
                    <td className="text-start">IDR {detail.total_harga}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Status</th>
                    <td className="text-start" style={{ color: "rgb(200, 0, 0)" }}>{detail.status_pembayaran}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your payment was successful. Redirecting to Dashboard...
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Payment;
