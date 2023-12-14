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
import "./css/PilihLayanan.css";

const PilihLayananPage = () => {

    return (
        <>
            <div className="container-xxl cont-nav mt-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href=""
                            className="link-underline link-underline-opacity-0">Laundry Page</a></li>
                        <li className="breadcrumb-item active" aria-current="page"><strong>Pilih Layanan</strong></li>
                    </ol>
                </nav>
            </div>
            <Container className="cont cont-input mt-5">
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ color: "#014E87" }}><strong>Pilih Layanan</strong></h3>
                </div>
                <Form>
                    <div className="form-floating mt-3">
                        <textarea required className="form-control" id="alamat" style={{ height: "100px" }}></textarea>
                        <label htmlFor="alamat">Alamat</label>
                    </div>
                    <div className="row mt-3">
                        <div className="cont-input-layanan">
                            <select className="form-select" id="layanan" required>
                                <option selected disabled value="">Pilih Layanan</option>
                                <option>Reguler</option>
                                <option>Express</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <label className="d-flex mb-2" htmlFor="berat"><strong>Berat Laundry (Kg)</strong></label>
                            <input type="text" className="form-control" id="berat" placeholder="Masukkan berat laundry" />
                        </div>
                        <div class="col-6">
                            <p className="d-flex"><strong>Pilih Layanan Lainnya:</strong></p>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="jaket" />
                                <label className="form-check-label d-flex" htmlFor="jaket">
                                    Jaket
                                </label>
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