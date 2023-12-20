import { useState } from "react";
import { Button, Alert, Spinner, Form, Container, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputFloatingForm from "./InputFloatingForm";
import { Login } from "../../api/apiAuth";
import AdminPageBackground from "../../pages/admin/adminPageBackground";
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
        console.log(`type pengguna :  ${data.type_pengguna}`);
        console.log(`tes: ${data}`);
        if (data.type_pengguna === "admin") {
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
      <Container className="d-flex justify-content-center align-items-center border-0">
        <Card className="border-0 mt-5" style={{ width: "60%", padding: "0" }}>
          <Card.Header
            className="text-white text-center h5"
            style={{ backgroundColor: "orange" }}
          >
            LOGIN
          </Card.Header>
          <Card.Body>
            <Form
              style={{ maxWidth: "800px", margin: "auto" }}
              className="p-4"
              onSubmit={login}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="d-flex">Email</Form.Label>
                <Form.Control
                  label="Email"
                  placeholder="Masukkan Email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex">Password</Form.Label>
                <Form.Control
                  label="Password"
                  placeholder="Masukkan Password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex"
                controlId="formBasicCheckbox"
                style={{ gap: "10px" }}
              >
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={isDisabled || loading}
                className="mt-3 w-100 border-0 buttonSubmit btn-lg"
                style={{ backgroundColor: "orange" }}
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
          </Card.Body>
        </Card>
      </Container>
  );
};
export default FormLogin;
