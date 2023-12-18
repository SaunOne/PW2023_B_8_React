import React, { useEffect } from "react";
import { Button, Alert, Spinner, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { GetUserById, UpdateProfile } from "../../api/apiUsers";
const FormProfile = () => {
    const [isEditMode, setEditMode] = useState(false);
    const [user, setUser] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await GetUserById(sessionStorage.getItem("id_user"));
                setUser(userData);
                setEditedUser({ ...userData });
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserData();
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancelClick = () => {
        setEditMode(false);
        setEditedUser({ ...user });
    };

    const handleSaveClick = async () => {
        try {
            await UpdateProfile(editedUser);

            setUser({ ...editedUser });
            setEditMode(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    if (!user) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

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
                            <Form.Control
                                type="text"
                                name="fullname"
                                id="id"
                                value={editedUser.fullname}
                                onChange={handleInputChange}
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="email" className="form-label d-flex"><strong>Email</strong></label>
                            {/* <input type="text" name="email" id="email" className="form-control" value={editedUser.email} onChange={handleInputChange} disabled={!isEditMode} /> */}
                            <Form.Control
                                type="text"
                                name="email"
                                id="email"
                                value={editedUser.email}
                                onChange={handleInputChange}
                                disabled={!isEditMode}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="telepon" className="form-label mt-3 d-flex"><strong>Nomor Telepon</strong></label>
                            {/* <input type="text" name="telepon" id="telepon" className="form-control" value={editedUser.no_telp} onChange={handleInputChange} disabled={!isEditMode} /> */}
                            <Form.Control
                                type="text"
                                name="no_telp"
                                id="no_telp"
                                value={editedUser.no_telp}
                                onChange={handleInputChange}
                                disabled={!isEditMode}
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="username" className="form-label mt-3 d-flex"><strong>Username</strong></label>
                            {/* <input type="text" name="username" id="username" className="form-control" value={editedUser.username} onChange={handleInputChange} disabled={!isEditMode} /> */}
                            <Form.Control
                                type="text"
                                name="username"
                                id="username"
                                value={editedUser.username}
                                onChange={handleInputChange}
                                disabled={!isEditMode}
                            />
                        </div>
                    </div>
                    <label htmlFor="alamat" className="form-label mt-3 d-flex"><strong>Alamat</strong></label>
                    {/* <textarea className="form-control" name="alamat" id="alamat" cols="10" rows="5" onChange={handleInputChange} disabled={!isEditMode}>{editedUser.alamat}</textarea> */}
                    <Form.Control
                        as="textarea"
                        name="alamat"
                        id="alamat"
                        cols="10"
                        rows="5"
                        value={editedUser.alamat}
                        onChange={handleInputChange}
                        disabled={!isEditMode}
                    />
                </div>
            </div>
        </Form>
    );
};
export default FormProfile;