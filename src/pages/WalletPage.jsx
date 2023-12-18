import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Container,
  Button,
} from "react-bootstrap";
import { auto } from "@popperjs/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import "./css/Wallet.css";

const Wallet = () => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <Container className="cont">
            <h4 className="d-flex">Your Wallet</h4>
            <h2 className="d-flex"><FontAwesomeIcon icon={faWallet} /> <strong>IDR 800000</strong></h2>
            <Form>
              <label htmlFor="jumlahUang" className="d-flex"><strong>Jumlah Uang</strong></label>
              <input type="number" className="form-control mt-2" id="jumlahUang" name="jumlahUang" placeholder="Masukkan Jumlah Uang" />
              <br />
              <label htmlFor="pilihLayanan" className="d-flex"><strong>Pilih layanan TopUp:</strong></label>
              <select className="form-select mt-2" aria-label="Default select example" id="pilihLayanan" name="pilihLayanan">
                <option value="1">Bank Transfer</option>
                <option value="2">E-Money</option>
              </select>
              <Button className="mt-4 d-flex btn-topUp">
                Isi Saldo
              </Button>
            </Form>
          </Container>
        </div>
        <div className="col-5">
          <Container className="cont">
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
          </Container>
        </div>
      </div>
    </>
  );
};

export default Wallet;
