// src/pages/adminPage/createUserPage.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";
import AdminPageBackground from "../admin/adminPageBackground";
import SidenavCustom from "../admin/sideNav";
import CustomNavbar from "../admin/topNav";
import { Row, Col } from "rsuite";

const CreateUser = () => {
  const [isSidenavExpanded, setSidenavExpanded] = useState(true);
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/");
  };
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <AdminPageBackground>
      <div className="row d-flex">
        <div style={{ maxWidth: "250px" }}>{/* <SidenavCustom /> */}</div>
        <div className="col">
          <div className="container-fluid px-4 py-2">
            <div
              className="container px-4 py-3 my-4 rounded"
              style={{
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "10px",
              }}
            >
              <h1>Create User</h1>
              <div className="row mb-2">
            <div className="col-md-12">
            <label className="d-flex">Nama Lengkap</label>
                <input
                  type="text"
                  label="Fullname"
                  name="fullname"
                  onChange={handleChange}
                  placeholder="Masukkan Nama"
                  className="form-control"
                />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
            <label className="d-flex">Username</label>
                <input
                  type="text"
                  label="Username"
                  name="username"
                  onChange={handleChange}
                  placeholder="Masukkan Username"
                  className="form-control"
                />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
            <label className="d-flex">Email</label>
                <input
                  type="email"
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Masukkan Email"
                  className="form-control"
                />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
            <label className="d-flex">Password</label>
                <input
                  type="password"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Masukkan Password"
                  className="form-control"
                />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
            <label className="d-flex">Alamat</label>
                <input
                  type="text"
                  label="alamat"
                  name="alamat"
                  onChange={handleChange}
                  placeholder="Masukkan Alamat"
                  className="form-control"
                />
            </div>
          </div>
            <Button
              type="submit"
              className="mt-3 w-100 border-0 buttonSubmit btn-lg"
            >
              Register
            </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminPageBackground>
  );
};

export default CreateUser;
