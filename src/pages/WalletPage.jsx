import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Container,
  Button,
  Spinner,
  Modal
} from "react-bootstrap";
import { auto } from "@popperjs/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import "./css/Wallet.css";
import { GetUserById, UpdateProfile } from "../api/apiUsers";
import { GetDepositByUserId, Deposit } from "../api/apiDeposit";

const Wallet = () => {
  const [user, setUser] = useState(null);
  const [deposit, setDeposit] = useState(null);
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await GetUserById(sessionStorage.getItem("id_user"));
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDepositData = async () => {
      try {
        const depositData = await GetDepositByUserId(sessionStorage.getItem("id_user"));
        setDeposit(depositData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
    fetchDepositData();
  }, []);

  const handleTopUpClick = async () => {
    try {
      const updatedUser = { ...user, saldo: user.saldo + parseFloat(amount) };
      await UpdateProfile(updatedUser);

      const newDeposit = {
        user_id: user.id_user,
        metode_pembayaran: document.getElementById("pilihLayanan").value,
        jumlah_deposit: parseFloat(amount),
        tipe: "Isi Saldo",
        tanggal_deposit: new Date().toISOString(),
      };
      await Deposit(newDeposit);

      const refreshedUser = await GetUserById(sessionStorage.getItem("id_user"));
      const refreshedDeposit = await GetDepositByUserId(sessionStorage.getItem("id_user"));

      setUser(refreshedUser);
      setDeposit(refreshedDeposit);
      setAmount("");
      setShowModal(true);

    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  } else if (!deposit) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-7">
          <Container className="cont">
            <h4 className="d-flex">Your Wallet</h4>
            <h2 className="d-flex mt-2" style={{color: "#014E87"}}><FontAwesomeIcon icon={faWallet} /><strong>IDR {user.saldo}.00</strong></h2>
            <Form className="mt-2">
              <label htmlFor="jumlahUang" className="d-flex"><strong>Jumlah Uang</strong></label>
              {/* <input type="number" className="form-control mt-2" id="jumlahUang" name="jumlahUang" placeholder="Masukkan Jumlah Uang" /> */}
              <Form.Control
                type="number"
                placeholder="Masukkan Jumlah Uang"
                className="mt-2"
                id="jumlahUang"
                name="jumlahUang"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <br />
              <label htmlFor="pilihLayanan" className="d-flex"><strong>Pilih layanan TopUp:</strong></label>
              <select className="form-select mt-2" aria-label="Default select example" id="pilihLayanan" name="pilihLayanan">
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="E-Money">E-Money</option>
              </select>
              <Button className="mt-4 d-flex btn-topUp" onClick={handleTopUpClick}>
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
                      {deposit.map((depositItem) => (
                        <tr key={depositItem.id_deposit}>
                          <th>{depositItem.id_deposit}</th>
                          <td>{depositItem.metode_pembayaran}</td>
                          <td style={{ color: "green" }}>+IDR {depositItem.jumlah_deposit}</td>
                          <td>Isi Saldo</td>
                          <td>{depositItem.tanggal_deposit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Berhasil Deposit Wallet sebesar IDR {amount}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Wallet;
