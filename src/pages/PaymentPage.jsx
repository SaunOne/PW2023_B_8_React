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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCreditCard, faWallet } from "@fortawesome/free-solid-svg-icons";
import "./css/Payment.css";

const PaymentPage = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("wallet");

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    return (
        <>
            <div className="container steps">
                <Steps current={2}>
                    <Steps.Item title="Laundry Page" />
                    <Steps.Item title="Pilih Layanan" />
                    <Steps.Item title="Payment Page" />
                </Steps>
            </div>
            <div className="row">
                <div className="col-8 cont-1">
                    <Container className="cont-payment mb-5">
                        <div className="row">
                            <h4 className="d-flex" style={{ color: "#014E87" }}><strong>DETAIL PEMBAYARAN</strong></h4>
                        </div>
                        <div className="row mt-5">
                            <Form id="walletForm" style={{ display: selectedPaymentMethod === "wallet" ? "block" : "none" }}>
                                <label htmlFor="wallet" style={{color: "#014E87"}} className="form-label d-flex"><FontAwesomeIcon icon={faWallet} /><strong>Jumlah Saldo</strong></label>
                                <input type="text" className="form-control form-control-lg" id="wallet" name="wallet"
                                    value="IDR 1.000.000,00" readOnly />
                            </Form>

                        </div>
                        <div className="mt-4 d-flex justify-content-end">
                            <a href="" type="button" className="btn btn-back">Kembali</a>
                            <a type="button" className="btn btn-next">Bayar</a>
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
                            <tbody>
                                <tr>
                                    <th className="text-start">Nama Laundry</th>
                                    <td className="text-start">Laundry yrdnuaL</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Alamat</th>
                                    <td className="text-start">Jl. Babarsari 098</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Nomor Telepon</th>
                                    <td className="text-start">081123123123123</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Berat Cucian (Kg)</th>
                                    <td className="text-start">3 Kg</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Total Harga</th>
                                    <td className="text-start">Rp20.000,00</td>
                                </tr>
                                <tr>
                                    <th className="text-start">Status</th>
                                    <td className="text-start" style={{ color: "rgb(200, 0, 0)" }}>Belum Dibayar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PaymentPage;

{/* <Form id="debitForm" style={{ display: selectedPaymentMethod === "card" ? "block" : "none" }}>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="nama" className="form-label"><strong>Nama</strong></label>
                                        <input type="text" className="form-control" id="nama" name="nama"
                                            placeholder="Nama Pemegang Kartu" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="nomor" className="form-label"><strong>Nomor Kartu</strong></label>
                                        <input type="text" className="form-control" id="nomor" name="nomor"
                                            placeholder="Nomor Kartu" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-4">
                                        <label htmlFor="bulan" className="form-label"><strong>Exp Month</strong></label>
                                        <input type="text" className="form-control" id="bulan" name="bulan"
                                            placeholder="Bulan" />
                                    </div>
                                    <div className="col-xxl-4">
                                        <label htmlFor="tahun" className="form-label"><strong>Exp Year</strong></label>
                                        <input type="text" className="form-control" id="tahun" name="tahun"
                                            placeholder="Tahun" />
                                    </div>
                                    <div className="col-xxl-4">
                                        <label htmlFor="cvv" className="form-label"><strong>CVV</strong></label>
                                        <input type="text" className="form-control" id="cvv" name="cvv"
                                            placeholder="CVV" />
                                    </div>
                                </div>
                            </Form>
                            <Form id="emoneyForm" style={{ display: selectedPaymentMethod === "coins" ? "block" : "none" }}>
                                <div className="row">
                                    <div className="col-xxl-6">
                                        <label htmlFor="nama" className="form-label"><strong>Nama</strong></label>
                                        <input type="text" className="form-control" id="nama" name="nama"
                                            placeholder="Nama" />
                                    </div>
                                    <div className="col-xxl-6">
                                        <label htmlFor="nomor" className="form-label"><strong>Nomor Telepon</strong></label>
                                        <input type="text" className="form-control" id="nomor" name="nomor"
                                            placeholder="Nomor Telepon" />
                                    </div>
                                </div>
                                <div className="row mt-3" style={{ paddingLeft: "10px" }}>
                                    <div className="col-3 col-sm-3 form-check mt-0">
                                        <input className="form-check-input" name="metodeBayar" type="radio" value=""
                                            id="gopay" />
                                        <label className="form-check-label" htmlFor="gopay">
                                            GOPAY
                                        </label>
                                    </div>
                                    <div className="col-xxl-3 col-sm-3 form-check">
                                        <input className="form-check-input" name="metodeBayar" type="radio" value=""
                                            id="shopeepay" />
                                        <label className="form-check-label" htmlFor="shopeepay">
                                            Shopee Pay
                                        </label>
                                    </div>
                                    <div className="col-xxl-3 col-sm-3 form-check">
                                        <input className="form-check-input" name="metodeBayar" type="radio" value=""
                                            id="ovo" />
                                        <label className="form-check-label" htmlFor="ovo">
                                            OVO
                                        </label>
                                    </div>
                                    <div className="col-xxl-3 col-sm-3 form-check">
                                        <input className="form-check-input" name="metodeBayar" type="radio" value=""
                                            id="dana" />
                                        <label className="form-check-label" htmlFor="dana">
                                            DANA
                                        </label>
                                    </div>
                                </div>
                            </Form> */}

                            // <div className="col d-flex justify-content-around">
                            //     <a
                            //         style={{ cursor: "pointer" }}
                            //         className={`text-center ${selectedPaymentMethod === "wallet" ? "active-wallet" : ""}`}
                            //         id="walletIcon"
                            //         onClick={() => handlePaymentMethodChange("wallet")}
                            //     >
                            //         <FontAwesomeIcon
                            //             icon={faWallet}
                            //             className="icon"
                            //         />
                            //         <span>Wallet</span>
                            //     </a>
                            //     <a
                            //         style={{ cursor: "pointer" }}
                            //         className={`text-center ${selectedPaymentMethod === "card" ? "active-card" : ""}`}
                            //         id="cardIcon"
                            //         onClick={() => handlePaymentMethodChange("card")}
                            //     >
                            //         <FontAwesomeIcon
                            //             icon={faCreditCard}
                            //             className="icon"
                            //         />
                            //         <span>Debit/Credit Card</span>
                            //     </a>
                            //     <a
                            //         style={{ cursor: "pointer" }}
                            //         className={`text-center ${selectedPaymentMethod === "coins" ? "active-coins" : ""}`}
                            //         id="coinIcon"
                            //         onClick={() => handlePaymentMethodChange("coins")}
                            //     >
                            //         <FontAwesomeIcon
                            //             icon={faCoins}
                            //             className="icon"
                            //         />
                            //         <span>E-Money</span>
                            //     </a>
                            // </div>