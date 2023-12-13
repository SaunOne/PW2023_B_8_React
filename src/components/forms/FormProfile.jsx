import React from "react";
import { Button, Alert, Spinner, Form } from "react-bootstrap";
import { useState } from "react";
const FormProfile = () => {
    return (
        <Form>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <input type="file" name="imageInput" id="imageInput" accept="image/*" />
                    <label htmlFor="imageInput">
                        <img className="rounded-circle img-profile" src="#" alt="Profile Image" />
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="nama" className="form-label mt-3"><strong>Nama</strong></label>
                    <input type="text" name="nama" id="id" className="form-control" value={"Konn"} />
                </div>
                <div className="col-6">
                    <label htmlFor="email" className="form-label mt-3"><strong>Email</strong></label>
                    <input type="text" name="email" id="email" className="form-control" value={"konn@gmail.com"} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="telepon" className="form-label mt-3"><strong>Nomor Telepon</strong></label>
                    <input type="text" name="telepon" id="telepon" className="form-control" value={"0080779796"} />
                </div>
                <div className="col-6">
                    <label htmlFor="username" className="form-label mt-3"><strong>Username</strong></label>
                    <input type="text" name="username" id="username" className="form-control" value={"konnnnnn"} />
                </div>
            </div>
            <label htmlFor="alamat" className="form-label mt-3"><strong>Alamat</strong></label>
            <textarea className="form-control" name="alamat" id="alamat" cols="30" rows="10">Jl. qwe</textarea>

            <div className="mt-3 d-flex justify-content-end">
                <button type="button" className="btn btn-danger" id="cancelBtn">Batal</button>
                <button type="button" className="btn btn-success" id="saveBtn">Simpan</button>
            </div>
        </Form>
    );
};
export default FormProfile;