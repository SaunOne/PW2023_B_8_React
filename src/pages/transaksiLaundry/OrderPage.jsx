import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Container,
} from "react-bootstrap";
import { Steps } from 'rsuite';
import "../css/PilihLayanan.css";
import { GetAllItems } from "../../api/apiItem";
import { GetAllJenisPengambilan } from "../../api/apiJenisPengambilan";
import { GetAllLayanan } from "../../api/apiLayanan";

const Order = () => {
  const [showJumlahLayanan, setShowJumlahLayanan] = useState(false);
  const [items, setItems] = useState([]);
  const [jenisPengambilan, setJenisPengambilan] = useState([]);
  const [layanan, setLayanan] = useState([]);
  const [order, setOrder] = useState({
    id_layanan: "",
    id_jenis_pengambilan: "",
    berat: "",
    total_harga: "",
    status_pengerjaan: "",
    status_pembayaran: "",
    tanggal_masuk: "",
    tanggal_keluar: "",
    note: "",
  });

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

  const handleLayananCheckboxChange = (event, itemId) => {
    setShowJumlahLayanan((prev) => ({
      ...prev,
      [itemId]: event.target.checked ? "" : undefined,
    }));
  };

  const handleInputChange = (event) => {
    setOrder({...order, [event.target.id]: event.target.value})
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("id_layanan", order.id_layanan);
    formData.append("id_jenis_pengambilan", order.id_jenis_pengambilan);
    formData.append("berat", order.berat);
    formData.append("total_harga", order.total_harga);
  }

  if (!items) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <div className="container steps" style={{ maxWidth: "45%" }}>
        <Steps current={1}>
          <Steps.Item title="Laundry Page" />
          <Steps.Item title="Pilih Layanan" />
          <Steps.Item title="Payment Page" />
        </Steps>
      </div>
      <Container className="cont cont-input mt-5">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "#014E87" }}><strong>Pilih Layanan</strong></h3>
        </div>
        <Form>
          <div className="form-floating mt-3">
            <textarea className="form-control" id="note" style={{ height: "100px" }}></textarea>
            <label htmlFor="note">Notes</label>
          </div>
          <div className="row mt-3">
            <div className="col-6 cont-input-layanan">
              <select className="form-select" id="durasi" required>
                <option selected disabled value="">Pilih Durasi</option>
                {layanan.map((layanan) => (
                  <option key={layanan.id_layanan} value={layanan.id_layanan}>{layanan.nama_layanan}</option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <select className="form-select" id="pengambilan" required>
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
              <input type="number" className="form-control" id="berat" placeholder="Masukkan berat laundry" />
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
                        onChange={(e) => handleLayananCheckboxChange(e, item.id_item)}
                      />
                      <label className="form-check-label d-flex" htmlFor={`item_${item.id_item}`}>
                        {item.nama_item}
                      </label>
                    </div>
                  </div>
                  {showJumlahLayanan[item.id_item] !== undefined && (
                    <div className="col-8">
                      <input 
                        className="form-control" 
                        type="number" 
                        placeholder="Masukkan Jumlah" 
                        id={`layananJumlah_${item.id_item}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-end">
            <a href="" type="button" className="btn btn-back">Kembali</a>
            <a href="" type="button" className="btn btn-next">Berikutnya</a>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Order;
