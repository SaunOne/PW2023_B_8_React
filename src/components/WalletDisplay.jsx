import React from "react";
import { Button, Alert, Spinner, Form } from "react-bootstrap";
import { useState } from "react";

const WalletDisplay = () => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="wallet" className="form-label mt-3"><strong>Wallet</strong></label>
                    <input type="text" name="wallet" id="wallet" className="form-control" value={"Rp. 100.000,00"} />
                </div>
            </div>
            <div className="row">
                <div className="col-6 mt-3">
                    <button type="button" className="btn btn-primary" id="topUpBtn">Isi Saldo</button>
                </div>
            </div>
            <h5 class="mt-3"><strong>Riwayat Transaksi</strong></h5>
            {/* <div class="row">
                <div class="col-xxl-12 mt-3">
                    <div class="table-responsive" style="overflow-x: auto;">
                        <table class="table table-info" style="min-width: 100%;">
                            <thead>
                                <tr class="header-row" style="background-color: #014E87">
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
                                    <td style="color: green">+Rp100.000,00</td>
                                    <td>Isi Saldo</td>
                                    <td>10-10-2023 <strong>20:59</strong></td>
                                </tr>
                                <tr>
                                    <th>102</th>
                                    <td>Wallet</td>
                                    <td style="color: red">-Rp56.000,00</td>
                                    <td>Pembayaran</td>
                                    <td>13-10-2023 <strong>16:32</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
export default WalletDisplay;