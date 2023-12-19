import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Container,
} from "react-bootstrap";
import { Steps } from 'rsuite';
import "../css/PilihLayanan.css";
import { GetAllItems } from "../../api/apiItem";

const Order = () => {
  const [showJumlahLayanan, setShowJumlahLayanan] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await GetAllItems();
        setItems(itemsData);
        console.log("yaya", itemsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const handleLayananCheckboxChange = (event, itemId) => {
    setShowJumlahLayanan((prev) => ({
      ...prev,
      [itemId]: event.target.checked ? "" : undefined,
    }));
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
                <option>Reguler (3 Hari)</option>
                <option>Express (2 Hari)</option>
                <option>Same Day</option>
              </select>
            </div>
            <div className="col-6">
              <select className="form-select" id="pengambilan" required>
                <option selected disabled value="">Pilih Pengambilan</option>
                <option>Delivery</option>
                <option>Pick Up</option>
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
