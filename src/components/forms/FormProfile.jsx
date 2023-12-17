import React from "react";
import { Button, Alert, Spinner, Form } from "react-bootstrap";
import { useState } from "react";
const FormProfile = () => {
    const [isEditMode, setEditMode] = useState(false);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
    };

    const handleSaveClick = () => {
        // Add logic to save changes if needed
        setEditMode(false);
    };

    return (
        <Form>
            <div className="row mt-3">
                <div className="col-3">
                    <div className="col d-flex justify-content-center">
                        <input type="file" name="imageInput" id="imageInput" accept="image/*" hidden disabled={!isEditMode} />
                        <label htmlFor="imageInput">
                            <img className="rounded-circle img-profile" src="../assets/images/profile2.png" alt="Profile Image" style={{ maxWidth: 200 }} />
                        </label>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        {!isEditMode && (
                            <button type="button" className="btn btn-primary ms-2" id="editBtn" onClick={handleEditClick}>Edit Porfile</button>
                        )}
                        {isEditMode && (
                            <>
                                <button type="button" className="btn btn-danger" id="cancelBtn" onClick={handleCancelClick}>Batal</button>
                                <button type="button" className="btn btn-success ms-2" id="saveBtn" onClick={handleSaveClick}>Simpan</button>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-9">
                    <h3 className="d-flex mb-3"><strong>My Profile</strong></h3>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="nama" className="form-label d-flex"><strong>Nama</strong></label>
                            <input type="text" name="nama" id="id" className="form-control" value={"Konn"} disabled={!isEditMode} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="email" className="form-label d-flex"><strong>Email</strong></label>
                            <input type="text" name="email" id="email" className="form-control" value={"konn@gmail.com"} disabled={!isEditMode} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="telepon" className="form-label mt-3 d-flex"><strong>Nomor Telepon</strong></label>
                            <input type="text" name="telepon" id="telepon" className="form-control" value={"0080779796"} disabled={!isEditMode} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="username" className="form-label mt-3 d-flex"><strong>Username</strong></label>
                            <input type="text" name="username" id="username" className="form-control" value={"konnnnnn"} disabled={!isEditMode} />
                        </div>
                    </div>
                    <label htmlFor="alamat" className="form-label mt-3 d-flex"><strong>Alamat</strong></label>
                    <textarea className="form-control" name="alamat" id="alamat" cols="10" rows="5" disabled={!isEditMode}>Jl. qwe</textarea>
                </div>
            </div>
        </Form>
    );
};
export default FormProfile;