import { Button, Alert, Spinner, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputFloatingForm from "./InputFloatingForm";
import { Register } from "../../api/apiAuth";
const FormRegister = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    alamat: "",
  });
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleCheck = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  const register = (event) => {
    event.preventDefault();
    Register(data)
      .then((res) => {
        navigate("/");
        toast.success(res.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form style={{ maxWidth: "800px", margin: "auto" }} onSubmit={register}>
        <div
          className="container py-3 px-4 mt-5 rounded"
          style={{ backgroundColor: "white", width: '600px' }}
        >
          <h1 className="mb-3 text-center">Register</h1>
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
            <label className="d-flex justify-content-start">
              <Form.Check type="checkbox" onChange={handleCheck} />
              <p className="ms-2">
                Have you Already Read the{" "}
                <a href="https://www.youtube.com/static?template=terms&gl=ID">
                  Terms of Service
                </a>
              </p>
            </label>
            <Button
              disabled={isDisabled}
              type="submit"
              className="mt-3 w-100 border-0 buttonSubmit btn-lg"
            >
              Register
            </Button>
            <p className="mt-2">
              Already Have an Account? <Link to="/login">Click Here!</Link>
            </p>
        </div>
      </Form>
    </div>
  );
};
export default FormRegister;
