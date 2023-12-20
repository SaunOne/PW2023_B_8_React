import React, { useEffect, useState } from "react";
import pending from "../assets/lottiefile/pending1.json";
import proses from "../assets/lottiefile/proses.json";
import done from "../assets/lottiefile/lottieDone.json";
import loading from "../assets/lottiefile/loading.json";
import "./pages.css";
import Lottie from "lottie-react";
import "./history.css";

import { GetTransaksiLaundryByIdUser } from "../api/apiTransaksiLaundry";
import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
  Stack,
  Button,
  Modal,
} from "react-bootstrap";
// import './YourComponent.css'; // Ganti dengan path file CSS yang sesuai
import { Pembayaran } from "../api/apiDeposit";
import { BayarTransaksiLaundry } from "../api/apiTransaksiLaundry";

const History = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [history, setHistory] = useState([]);
  const [codeSort, setCodeSort] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [historySearch, setHistorySearch] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTransaction(null);
  };

  const handleShowModal = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const handlePayment = async () => {
    try {
      await BayarTransaksiLaundry(selectedTransaction.id_transaksi_laundry);

      const newPembayaran = {
        jumlah: selectedTransaction.harga,
      };

      console.log(newPembayaran);

      await Pembayaran(newPembayaran);

      window.location.reload();
      handleCloseModal();
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  const toggleActive = (navId) => {
    sorting(navId);
    setActiveNav(navId);
    // Tambahkan logika atau panggil fungsi lain yang diperlukan saat mengganti navigasi
  };

  // const History = () => {
  //   setIsLoading(true);
  //   GetTransaksiLaundryByIdUser()
  //     .then((value) => {
  //       setHistory(value);

  //       console.log(`Isi History ${value}`);
  //     })
  //     .catch((err) => { });
  //   setIsLoading(false);
  // };

  const fetchHistory = () => {
    setIsLoading(true);
    GetTransaksiLaundryByIdUser()
      .then((value) => {
        setHistory(value);
        console.log(`Isi History ${value}`);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Di sini, Anda dapat melakukan sesuatu setelah perubahan historySearch
    fetchHistory();
  }, []);

  const sorting = (index) => {
    if (index == 1) {
      setCodeSort("all");
    } else if (index == 2) {
      setCodeSort("Proses");
    } else {
      setCodeSort("Done");
    }
  };

  const search = (event) => {
    setIsLoading(true);

    const searchValue = event.target.value.toLowerCase();
    if (searchValue == "") {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
    console.log(`Searching ${searchValue}`);

    const results = history.filter(
      (item) =>
        (typeof item.status_pengerjaan === "string" &&
          item.status_pengerjaan.toLowerCase().includes(searchValue)) ||
        (typeof item.status_pembayaran === "string" &&
          (item.status_pembayaran.toLowerCase() === searchValue ||
            item.status_pembayaran.toLowerCase() === searchValue)) ||
        (typeof item.tanggal_keluar === "string" &&
          item.tanggal_keluar.toLowerCase().includes(searchValue)) ||
        (typeof item.tanggal_masuk === "string" &&
          item.tanggal_masuk.toLowerCase().includes(searchValue)) ||
        (typeof item.nama_layanan === "string" &&
          item.nama_layanan.toLowerCase().includes(searchValue)) ||
        (typeof item.berat === "number" &&
          item.berat.toString().includes(searchValue)) ||
        (typeof item.harga === "number" &&
          item.harga.toString().includes(searchValue))
    );

    // Menyimpan hasil pencarian dalam array
    setHistorySearch(results);

    console.log("Results:", results);
    historySearch.map((item, index) => {
      console.log(`nama index${index} ${item.harga}`);
    });
    setIsLoading(false);
    // Lakukan sesuatu dengan data hasil pencarian
  };

  // useEffect(() => {
  //   // Di sini, Anda dapat melakukan sesuatu setelah perubahan historySearch
  //   History();
  // }, []); // Pastikan untuk menambahkan historySearch ke dalam dependensi useEffect jika diperlukan

  return (
    <>
      {isLoading ? (
        <div className="text-center mt-6">
          <Spinner
            as="span"
            animation="border"
            variant="primary"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          <h6 className="mt-2 mb-0">Loading...</h6>
        </div>
      ) : (
        <>
          <div className="row" style={{ height: "auto" }}>
            <div className="col-md col">
              <div className="app-bar2">
                <div
                  className={`s1 app-bar-p row v-center ${activeNav === 1 ? "active" : ""
                    }`}
                  style={{ height: "fit-content" }}
                >
                  <div className="col">
                    <div className="nav-search v-center">
                      <div
                        id="list_1"
                        className="l1 nav-list "
                        onClick={() => toggleActive(1)}
                      >
                        All
                      </div>
                      <div
                        id="list_2"
                        className="l1 nav-list"
                        onClick={() => toggleActive(2)}
                      >
                        Proses
                      </div>
                      <div
                        id="list_3"
                        className="l1 nav-list"
                        onClick={() => toggleActive(3)}
                      >
                        Done
                      </div>
                      <div
                        className={`search1 ${activeNav === 1 ? "active" : ""}`}
                        id="search"
                      >
                        <button className="float-left" id="button">
                          <i className="fa fa-search"></i>
                        </button>
                        <input
                          id="input"
                          style={{ width: "100%" }}
                          className="search-btn"
                          type="text"
                          onChange={search}
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="s2"
                  className={`app-bar-p row v-center search2 ${activeNav === 2 ? "active" : ""
                    }`}
                  style={{ height: "50px" }}
                >
                  <div className="col">
                    <div id="search">
                      <button className="float-left" id="">
                        <i className="fa fa-search"></i>
                      </button>
                      <input
                        id="input"
                        className="search-btn"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-box" style={{}}>
                {/* Render konten sesuai dengan navigasi aktif */}
                {isSearch ? (
                  isLoading ? (
                    <h1>true</h1>
                  ) : (
                    <>
                      {historySearch?.map((item, index) =>
                        codeSort === "all" ? (
                          <div className="col-6 mt-3" key={index}>
                            <div className="row card_body">
                              <div className="mb-1 p-5 p-md-2 col-xxl-5 col-xl-6 col-md-4 col card_img-body">
                                {item.status_pengerjaan === "Proses" ? (
                                  <Lottie animationData={proses}></Lottie>
                                ) : (
                                  <Lottie animationData={done}></Lottie>
                                )}
                              </div>
                              <div
                                className=" col-xxl-7 col-xl-6 col-md-8 col card_info"
                                style={{ textAlign: "start" }}
                              >
                                <h2 className="card_title">
                                  {item.status_pengerjaan}
                                </h2>
                                <p className="card_desc">
                                  Layanan <strong> {item.nama_layanan}</strong>
                                </p>
                                <p className="card_desc">
                                  in : {item.tanggal_masuk} - done :{" "}
                                  {item.tanggal_keluar}{" "}
                                </p>
                                <p className="card_desc">{item.berat} Kg</p>

                                <p className="card_desc">Rp. {item.harga}</p>

                                <i
                                  className="fa fa-arrow-right"
                                  style={{
                                    transform: "translate(105%, -25px)",
                                  }}
                                ></i>
                                <div className="card_size" onClick={() => handleShowModal(item)}>
                                  {item.status_pembayaran === "Lunas" ? (
                                    <div
                                      id="liveToastBtn"
                                      className="bc2 card_size-btn"
                                    >
                                      Lunas
                                    </div>
                                  ) : (
                                    <div
                                      id="liveToastBtn"
                                      href=""
                                      className="bc1 c-hov card_size-btn"
                                    >
                                      Bayar
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : item.status_pengerjaan === codeSort ? (
                          <div className="col-6 mt-3" key={index}>
                            <div className="row card_body">
                              <div className="mb-1 p-5 p-md-2 col-xxl-5 col-xl-6 col-md-4 col card_img-body">
                                {activeNav === 1 ? (
                                  <Lottie
                                    loop={true}
                                    animationData={pending}
                                  ></Lottie>
                                ) : activeNav === 2 ? (
                                  <Lottie animationData={proses}></Lottie>
                                ) : (
                                  <Lottie animationData={done}></Lottie>
                                )}
                              </div>
                              <div
                                className=" col-xxl-7 col-xl-6 col-md-8 col card_info"
                                style={{ textAlign: "start" }}
                              >
                                <h2 className="card_title">
                                  {item.status_pengerjaan}
                                </h2>
                                <p className="card_desc">
                                  Layanan <strong> {item.nama_layanan}</strong>
                                </p>
                                <p className="card_desc">
                                  in : {item.tanggal_masuk} - done :{" "}
                                  {item.tanggal_keluar}{" "}
                                </p>
                                <p className="card_desc">{item.berat} Kg</p>
                                <p className="card_desc">Rp. {item.harga}</p>

                                <i
                                  className="fa fa-arrow-right"
                                  style={{
                                    transform: "translate(105%, -25px)",
                                  }}
                                ></i>
                                <div className="card_size" onClick={() => handleShowModal(item)}>
                                  {item.status_pembayaran === "Lunas" ? (
                                    <div
                                      id="liveToastBtn"
                                      className="bc2 card_size-btn"
                                    >
                                      Lunas
                                    </div>
                                  ) : (
                                    <div
                                      id="liveToastBtn"
                                      href=""
                                      className="bc1 c-hov card_size-btn"
                                    >
                                      Bayar
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                    </>
                  )
                ) : (
                  history?.map((item, index) =>
                    codeSort === "all" ? (
                      <div className="col-6 mt-3" key={index}>
                        <div className="row card_body">
                          <div className="mb-1 p-5 p-md-2 col-xxl-5 col-xl-6 col-md-4 col card_img-body">
                            {item.status_pengerjaan === "Proses" ? (
                              <Lottie animationData={proses}></Lottie>
                            ) : (
                              <Lottie animationData={done}></Lottie>
                            )}
                          </div>
                          <div
                            className=" col-xxl-7 col-xl-6 col-md-8 col card_info"
                            style={{ textAlign: "start" }}
                          >
                            <h2 className="card_title">
                              {item.status_pengerjaan}
                            </h2>
                            <p className="card_desc">
                              Layanan <strong> {item.nama_layanan}</strong>
                            </p>
                            <p className="card_desc">
                              in : {item.tanggal_masuk} - done :{" "}
                              {item.tanggal_keluar}{" "}
                            </p>
                            <p className="card_desc">{item.berat} Kg</p>
                            <p className="card_desc">Rp. {item.harga}</p>

                            <i
                              className="fa fa-arrow-right"
                              style={{ transform: "translate(105%, -25px)" }}
                            ></i>
                            <div className="card_size" onClick={() => handleShowModal(item)}>
                              {item.status_pembayaran === "Lunas" ? (
                                <div
                                  id="liveToastBtn"
                                  className="bc2 card_size-btn"
                                >
                                  Lunas
                                </div>
                              ) : (
                                <div
                                  id="liveToastBtn"
                                  href=""
                                  className="bc1 c-hov card_size-btn"
                                >
                                  Bayar
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : item.status_pengerjaan === codeSort ? (
                      <div className="col-6 mt-3" key={index}>
                        <div className="row card_body">
                          <div className="mb-1 p-5 p-md-2 col-xxl-5 col-xl-6 col-md-4 col card_img-body">
                            {activeNav === 1 ? (
                              <Lottie
                                loop={true}
                                animationData={pending}
                              ></Lottie>
                            ) : activeNav === 2 ? (
                              <Lottie animationData={proses}></Lottie>
                            ) : (
                              <Lottie animationData={done}></Lottie>
                            )}
                          </div>
                          <div
                            className=" col-xxl-7 col-xl-6 col-md-8 col card_info"
                            style={{ textAlign: "start" }}
                          >
                            <h2 className="card_title">
                              {item.status_pengerjaan}
                            </h2>
                            <p className="card_desc">
                              Layanan <strong> {item.nama_layanan}</strong>
                            </p>
                            <p className="card_desc">
                              in : {item.tanggal_masuk} - done :{" "}
                              {item.tanggal_keluar}{" "}
                            </p>
                            <p className="card_desc">{item.berat} Kg</p>
                            <p className="card_desc">Rp. {item.harga}</p>

                            <i
                              className="fa fa-arrow-right"
                              style={{ transform: "translate(105%, -25px)" }}
                            ></i>
                            <div className="card_size" onClick={() => handleShowModal(item)}>
                              {item.status_pembayaran === "Lunas" ? (
                                <div
                                  id="liveToastBtn"
                                  className="bc2 card_size-btn"
                                >
                                  Lunas
                                </div>
                              ) : (
                                <div
                                  id="liveToastBtn"
                                  href=""
                                  className="bc1 c-hov card_size-btn"
                                >
                                  Bayar
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )
                )}
              </div>
            </div>
          </div>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Konfirmasi Pembayaran</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Anda yakin ingin melakukan pembayaran?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Batal
              </Button>
              <Button variant="primary" onClick={handlePayment}>
                Bayar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default History;
