import React, { useEffect, useState } from "react";
import pending from "../assets/lottiefile/pending1.json";
import proses from "../assets/lottiefile/proses.json";
import done from "../assets/lottiefile/lottieDone.json";
import "./pages.css";
import Lottie from "lottie-react";

import { GetTransaksiLaundryByIdUser } from "../api/apiTransaksiLaundry";
import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
  Stack,
  Button,
} from "react-bootstrap";
// import './YourComponent.css'; // Ganti dengan path file CSS yang sesuai

const History = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [history, setHistory] = useState([]);
  const [codeSort, setCodeSort] = useState("Pending");
  const [isLoading, setIsLoading] = useState(true);

  const toggleActive = (navId) => {
    sorting(navId);
    setActiveNav(navId);
    // Tambahkan logika atau panggil fungsi lain yang diperlukan saat mengganti navigasi
  };

  const History = () => {
    setIsLoading(true);
    GetTransaksiLaundryByIdUser()
      .then((value) => {
        setHistory(value);

        console.log(`Isi History ${value}`);
      })
      .catch((err) => {});
    setIsLoading(false);
  };

  const sorting = (index) => {
    if (index == 1) {
      setCodeSort("Pending");
    } else if (index == 2) {
      setCodeSort("Proese");
    } else {
      setCodeSort("Done");
    }
  };

  useEffect(() => {
    History();
  }, []);

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
                  className={`s1 app-bar-p row v-center ${
                    activeNav === 1 ? "active" : ""
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
                        Pending
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
                          className="search-btn"
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="s2"
                  className={`app-bar-p row v-center search2 ${
                    activeNav === 2 ? "active" : ""
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
                {history?.map((item, index) =>
                  item.status_pengerjaan === codeSort ? (
                    <div className="col-6" key={index}>
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
                            {item.tanggal_masuk} - {item.tanggal_keluar}
                          </h2>
                          <p className="card_desc">
                            Layanan <strong> {item.nama_layanan}</strong>
                          </p>
                          <p className="card_desc">{item.berat} Kg</p>
                          <p className="card_desc">Rp. {item.harga}</p>

                          <i
                            className="fa fa-arrow-right"
                            style={{ transform: "translate(105%, -25px)" }}
                          ></i>
                          <div className="card_size">
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
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default History;
