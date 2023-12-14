import React from "react";
import { useEffect, useState } from "react";
import {
    Alert,
    Col,
    Container,
    Row,
    Spinner,
    Stack,
    Button,
} from "react-bootstrap";
import { auto } from "@popperjs/core";
import "./css/Profile.css";
import FormProfile from "../components/forms/FormProfile";
import ModalTopUp from "../components/modals/ModalTopUp";

const ProfilePage = () => {

    return (
        <body className="main">
            <div className="row pler mt-3">
                <div className="col-8">
                    <div className="container cont">
                        <FormProfile />
                    </div>
                </div>
                <div className="col-4">
                    <div className="container cont-wallet">
                        <div className="row">
                            <div className="col-8">
                                <label htmlFor="wallet" className="form-label mt-3 d-flex"><strong>Wallet</strong></label>
                                <input type="text" name="wallet" id="wallet" className="form-control" value={"Rp. 100.000,00"} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 mt-3">
                                {/* <button type="button" className="btn btn-primary d-flex" id="topUpBtn" onClick={handleTopUpClick}>Isi Saldo</button> */}
                                <ModalTopUp/>
                            </div>
                        </div>
                        <h5 className="mt-3 d-flex"><strong>Riwayat Transaksi</strong></h5>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="table-responsive" style={{ overflow: auto }}>
                                    <table className="table table-info" style={{ minWidth: 100 }}>
                                        <thead>
                                            <tr className="header-row" style={{ backgroundColor: "#014E87" }}>
                                                <th>ID</th>
                                                <th>Metode</th>
                                                <th>Jumlah</th>
                                                <th>Tipe</th>
                                                <th>Tanggal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>101</th>
                                                <td>Bank Transfer</td>
                                                <td style={{ color: "green" }}>+Rp100.000,00</td>
                                                <td>Isi Saldo</td>
                                                <td>10-10-2023 <strong>20:59</strong></td>
                                            </tr>
                                            <tr>
                                                <th>102</th>
                                                <td>Wallet</td>
                                                <td style={{ color: "red" }}>-Rp56.000,00</td>
                                                <td>Pembayaran</td>
                                                <td>13-10-2023 <strong>16:32</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default ProfilePage;