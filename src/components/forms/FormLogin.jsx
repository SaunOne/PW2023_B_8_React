import { useState } from "react";
import { Button, Alert, Spinner, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputFloatingForm from "./InputFloatingForm";
import { Login } from "../../api/apiAuth";
const FormLogin = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const newData = { ...data, [event.target.name]: event.target.value };
    setData(newData);
    if (newData.email.trim().length > 0 && newData.password.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const login = (event) => {
    event.preventDefault();
    setLoading(true);
    Login(data)
      .then((res) => {
        console.log( `type pengguna :  ${res.data.type_pengguna}`);
        if(res.data.type_pengguna === 'admin'){
          navigate("/admin");
        } else {
          navigate("/user");
        }
        sessionStorage.setItem("user", JSON.stringify(res.data));
        toast.success(res.message);
      })
      .catch((err) => {
        console.log(err);
        toast.dark(err.message);
        setLoading(false);
      });
  };

  return (

    <Form
      style={{ maxWidth: "800px", margin: "auto" }}
      className="p-4"
      onSubmit={login}
    >
      <Alert variant="primary" className="mb-5 alertColor">
        <p className="mb-0 lead">
          <strong>Atma</strong>Hub
        </p>
        <p className="mb-0">Selamat datang. Silakan masuk ke akun Anda.</p>
      </Alert>
      <InputFloatingForm
        label="Email"
        placeholder="Masukkan Email"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <InputFloatingForm
        label="Password"
        placeholder="Masukkan Password"
        name="password"
        type="password"
        autoComplete="off"
        onChange={handleChange}
      />
      <Button
        variant="primary"
        type="submit"
        disabled={isDisabled || loading}
        className="mt-3 w-100 border-0 buttonSubmit btn-lg"
      >
        {loading ? (
          <Spinner animation="border" variant="light" size="sm" />
        ) : (
          <span>Login</span>
        )}
      </Button>
      <p className="text-end mt-2">
        Don't have an Account? <Link to="/register">Click Here!</Link>
      </p>
    </Form>
  );
};
export default FormLogin;
