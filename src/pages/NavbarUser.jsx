import React from "react";
import { useEffect, useState } from "react";
import { auto } from "@popperjs/core";
import "./css/NavbarUser.css";

const NavbarUser = () => {

    return (
        <header className="app-bar" style={{ padding: "0px", margin: "0px" }}>
            <div className="container-fluid" style={{ position: "fixed", zIndex: "1000", backgroundColor: "#A2D5F2" }}>
                <nav className=" navbar navbar-expand-lg " aria-label="Offcanvas navbar large">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="{{url('/home_user')}}">
                            <img className="img-appbar-logo" src="./src/assets/images/logo_horisontal.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header ">
                                <div className="row" style={{ marginLeft: "5px" }}>
                                    <div className="col-3" style={{ display: "flex", alignItems: "center" }}>
                                        <a href="" id="pf" className="hilang profile" style={{ display: "block" }}> <img style={{ marginLeft: "-8px" }} src="" alt="" /></a>
                                    </div>
                                    <div className="col-7">
                                        <div className="row">
                                            <div className="col">
                                                <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Pandu Prakyasa Yoga</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="email col">
                                                pandupandunet@gmail.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2 " style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <a style={{ marginRight: "-5px" }} className="hllang nav-link" href="#"><i className="fas fa-bell text-blue3"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas-body">
                                <ul style={{ paddingTop: "7px" }} className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li id="notif" style={{ display: "none" }} className="notif nav-item">
                                        <a className="notif nav-link" aria-current="page" href="#">Notifikasi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="menu nav-link" aria-current="page" href="{{url('/pilihLaundry')}}">Laundry</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="menu nav-link" href="#">History</a>
                                    </li>
                                    <li style={{ margin: "2px 10px 0px 10px" }} className="hilang">
                                        <a id="btn_notif" style={{ marginTop: "4px", cursor: "pointer" }} className=" nav-link"><i className="fa fa-bell text-blue3"></i></a>
                                    </li>

                                    <li className="hilang">
                                        <a style={{ marginTop: "0px" }} className="nav-link" href="{{url('/profile')}}">
                                            <div className="profile-hp" style={{ backgroundColor: "aliceblue" }}> <img style={{ marginTop: "0px", marginRight: "5px", objectFit: "cover" }} src="./src/assets/images/profile2.png" alt="" />
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavbarUser;