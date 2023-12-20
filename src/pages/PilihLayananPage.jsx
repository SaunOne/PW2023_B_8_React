import React from "react";
import { useEffect, useState } from "react";
import {
    Form,
    Col,
    Container,
    Row,
    Spinner,
    Stack,
    Button,
} from "react-bootstrap";
import { Steps } from 'rsuite';
import "./css/PilihLayanan.css";

const PilihLayananPage = () => {
    const [showJumlahLayanan, setShowJumlahLayanan] = useState(false);

    const handleLayananCheckboxChange = (event) => {
        setShowJumlahLayanan(event.target.checked);
    };

    return (
        <>
            <div className="container steps">
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
                        <div class="col-6">
                            <p className="d-flex"><strong>Pilih Layanan Lainnya:</strong></p>
                            <div className="row mb-2">
                                <div className="col-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="jaket" onChange={handleLayananCheckboxChange} />
                                        <label className="form-check-label d-flex" htmlFor="jaket">
                                            Jaket
                                        </label>
                                    </div>
                                </div>
                                {showJumlahLayanan && (
                                    <div className="col-9">
                                        <input className="form-control" type="number" placeholder="Masukkan Jumlah" id="jaketJumlah" />
                                    </div>
                                )}
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="selimut" />
                                <label className="form-check-label d-flex" htmlFor="selimut">
                                    Selimut
                                </label>
                            </div>
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
}
export default PilihLayananPage;