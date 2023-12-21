import React from "react";
import { useEffect, useState } from "react";
import { Form, Container, Button, Spinner, Modal } from "react-bootstrap";
import { auto } from "@popperjs/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "./css/Wallet.css";
import { GetUserById, GetUserByLogin } from "../api/apiUsers";
import { GetDepositByUserId, Deposit } from "../api/apiDeposit";

const Wallet = () => {
  const [user, setUser] = useState(null);
  const [deposit, setDeposit] = useState();
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
        GetDepositByUserId(
           sessionStorage.getItem("id_user")
        ).then((value) => {
          
          setDeposit(value);
        });
         
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
    fetchDepositData();
    console.log(`masuk ke wallet`);
  }, []);

  const handleTopUpClick = async () => {
    try {
      const newDeposit = {
        metode_pembayaran: document.getElementById("pilihLayanan").value,
        jumlah: parseFloat(amount),
      };
      await Deposit(newDeposit);

      const refreshedUser = await GetUserByLogin(
        sessionStorage.getItem("id_user")
      );
      const refreshedDeposit = await GetDepositByUserId(
        sessionStorage.getItem("id_user")
      );
      console.log(refreshedDeposit);
      setUser(refreshedUser);
      setDeposit(refreshedDeposit);
      setShowModal(true);
      setAmount("");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(`masuk user ${user == null} dan deposit ${deposit == null}`);
  if (!user) {
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
            <h2 className="d-flex mt-2" style={{ color: "#014E87" }}>
              <FontAwesomeIcon icon={faWallet} />
              <strong>IDR {user.saldo}.00</strong>
            </h2>
            <Form className="mt-2">
              <label htmlFor="jumlahUang" className="d-flex">
                <strong>Jumlah Uang</strong>
              </label>
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
              <label htmlFor="pilihLayanan" className="d-flex">
                <strong>Pilih layanan TopUp:</strong>
              </label>
              <select
                className="form-select mt-2"
                aria-label="Default select example"
                id="pilihLayanan"
                name="pilihLayanan"
              >
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="E-Money">E-Money</option>
              </select>
              <Button
                className="mt-4 btn-topUp d-flex"
                onClick={handleTopUpClick}
              >
                Isi Saldo
              </Button>
            </Form>
          </Container>
        </div>
        <div className="col-5">
          <Container className="cont">
            <h5 className="mt-3 d-flex">
              <strong>Riwayat Transaksi</strong>
            </h5>
            <div className="row">
              <div className="col-12 mt-3">
                <div
                  className="table-responsive"
                  style={{ maxHeight: "300px", overflowY: auto }}
                >
                  <table className="table table-info" style={{ minWidth: 100 }}>
                    <thead>
                      <tr
                        className="header-row"
                        style={{ backgroundColor: "#014E87" }}
                      >
                        <th>ID</th>
                        <th>Metode</th>
                        <th>Jumlah</th>
                        <th>Tipe</th>
                        <th>Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {deposit?.map((depositItem) => (
                      <tr key={depositItem.id_transaksi_wallet}>
                        <th>{depositItem.id_transaksi_wallet}</th>
                        <td>{depositItem.metode_pembayaran}</td>
                        <td
                          style={{
                            color:
                              depositItem.type_transaksi === "Deposit"
                                ? "green"
                                : "red",
                          }}
                        >
                          {depositItem.type_transaksi === "Deposit"
                            ? `+IDR ${depositItem.jumlah}`
                            : `-IDR ${depositItem.jumlah}`}
                        </td>
                        <td>{depositItem.type_transaksi}</td>
                        <td>{depositItem.tanggal}</td>
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
        <Modal.Body>Berhasil Deposit Wallet sebesar IDR {amount}</Modal.Body>
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
