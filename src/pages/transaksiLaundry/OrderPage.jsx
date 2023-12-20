import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Container,
  Spinner,
  Button,
  Modal
} from "react-bootstrap";
import { Steps } from 'rsuite';
import "./PilihLayanan.css";
import { GetAllItems } from "../../api/apiItem";
import { GetAllJenisPengambilan } from "../../api/apiJenisPengambilan";
import { GetAllLayanan } from "../../api/apiLayanan";
import { OrderTransaksiLaundry } from "../../api/apiTransaksiLaundry";
import { TambahItemTransaksiTambahan } from "../../api/apiTransaksiTambahan";

const Order = () => {
  const [showJumlahLayanan, setShowJumlahLayanan] = useState(false);
  const [items, setItems] = useState([]);
  const [jenisPengambilan, setJenisPengambilan] = useState([]);
  const [layanan, setLayanan] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [idCreatedTransaksi, setIdCreatedTransaksi] = useState();
  const [isPending, setIsPending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    id_layanan: "",
    id_jenis_pengambilan: "",
    berat: "",
  });

  const handleModalClose = () => {
    handleBerikutnyaClick();
    setShowModal(false);
    navigate('/user/payment');
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await GetAllItems();
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchJenisPengambilan = async () => {
      try {
        const jenisPengambilanData = await GetAllJenisPengambilan();
        setJenisPengambilan(jenisPengambilanData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLayanan = async () => {
      try {
        const layananData = await GetAllLayanan();
        setLayanan(layananData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
    fetchJenisPengambilan();
    fetchLayanan();
  }, []);

  const handleLayananCheckboxChange = (itemId, checked) => {
    setShowJumlahLayanan((prev) => ({
      ...prev,
      [itemId]: checked,
    }));
  };

  // const handleInputChange = (event) => {
  //   setOrder({ ...order, [event.target.id]: event.target.value })
  // }

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (id === 'durasi') {
      console.log('Selected Durasi:', value);
      setOrder({ ...order, id_layanan: value });
    } else if (id === 'pengambilan') {
      console.log('Selected Pengambilan:', value);
      setOrder({ ...order, id_jenis_pengambilan: value });
    } else {
      setOrder({ ...order, [id]: value });
    }
  }

  const submitData = async (event) => {
    event.preventDefault();
    setIsPending(true);
    const formData = new FormData();
    formData.append("id_layanan", order.id_layanan);
    formData.append("id_jenis_pengambilan", order.id_jenis_pengambilan);
    formData.append("berat", order.berat);

    await OrderTransaksiLaundry(formData).then((value) => {
      setIdCreatedTransaksi(value.id_transaksi_laundry);
      sessionStorage.setItem("id_transaksi", value.id_transaksi_laundry);
      setIsPending(false);
      console.log(`id_transaksi_laundry: ${value.id_transaksi_laundry}`);
    });

    setShowModal(true);
    // handleDelay();
  }

  const handleBerikutnyaClick = async () => {
    const selectedItemsData = Object.keys(showJumlahLayanan)
      .filter((itemId) => showJumlahLayanan[itemId])
      .map((itemId) => ({
        itemId,
        quantity: document.getElementById(`layananJumlah_${itemId}`).value,
      }));
    setSelectedItems(selectedItemsData);
    console.log(selectedItemsData);

    for (let i = 0; i < selectedItemsData.length; i++) {
      const transaksiTambahanData = {
        id_transaksi_laundry: idCreatedTransaksi,
        id_item: selectedItemsData[i].itemId,
        jumlah: selectedItemsData[i].quantity,
      };
      const createdTransaksiTambahan = await TambahItemTransaksiTambahan(transaksiTambahanData);
      console.log('Transaksi tambahan created:', createdTransaksiTambahan);
    }
  };

  if (!items) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <div className="container steps" style={{ maxWidth: "30%" }}>
        <Steps current={0}>
          <Steps.Item title="Pilih Layanan" />
          <Steps.Item title="Payment Page" />
        </Steps>
      </div>
      <Container className="cont cont-input mt-5">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "#014E87" }}><strong>Pilih Layanan</strong></h3>
        </div>
        <Form onSubmit={submitData}>
          {/* <div className="form-floating mt-3">
            <textarea className="form-control" id="note" style={{ height: "100px" }}></textarea>
            <label htmlFor="note">Notes</label>
          </div> */}
          <div className="row mt-5">
            <div className="col-6 cont-input-layanan">
              <select className="form-select" id="durasi" onChange={handleInputChange} required>
                <option selected disabled value="">Pilih Durasi</option>
                {layanan.map((layanan) => (
                  <option key={layanan.id_layanan} value={layanan.id_layanan}>{layanan.nama_layanan}</option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <select className="form-select" id="pengambilan" onChange={handleInputChange} required>
                <option selected disabled value="">Pilih Pengambilan</option>
                {jenisPengambilan.map((jenis) => (
                  <option key={jenis.id_jenis_pengambilan} value={jenis.id_jenis_pengambilan}>{jenis.nama_jenis_pengambilan}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <label className="d-flex mb-2" htmlFor="berat"><strong>Berat Laundry (Kg)</strong></label>
              <input type="number" className="form-control" id="berat" placeholder="Masukkan berat laundry" onChange={handleInputChange} required />
            </div>
            <div className="col-6">
              <p className="d-flex"><strong>Pilih Layanan Lainnya:</strong></p>
              {items.map((item) => (
                <div className="row mb-2" key={item.id_item}>
                  <div className="col-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item.nama_item}
                        id={`item_${item.id_item}`}
                        onChange={(e) => handleLayananCheckboxChange(item.id_item, e.target.checked)}
                      />
                      <label className="form-check-label d-flex" htmlFor={`item_${item.id_item}`}>
                        {item.nama_item}
                      </label>
                    </div>
                  </div>
                  {showJumlahLayanan[item.id_item] && (
                    <div className="col-8">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Masukkan Jumlah"
                        id={`layananJumlah_${item.id_item}`}
                      // onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-end">
            <a href="" type="button" className="btn btn-back">Kembali</a>
            <Button type="submit" className="btn btn-next" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </>
              ) : (
                <span>Berikutnya</span>
              )}
            </Button>
          </div>
        </Form>
        {selectedItems.length > 0 && (
          <div>
            <h5>Selected Items:</h5>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.itemId}>
                  Item ID: {item.itemId}, Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Berhasil Menambahkan Data Order
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-modal" variant="success" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
