import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Container,
} from "react-bootstrap";
import { Steps } from 'rsuite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "../css/Payment.css";

const Payment = () => {
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
                <label htmlFor="wallet" style={{ color: "#014E87" }} className="form-label d-flex"><FontAwesomeIcon icon={faWallet} /><strong>Jumlah Saldo</strong></label>
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
};

export default Payment;
