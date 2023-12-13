import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
    } else if (username.trim() === "" || password.trim() === "") {
      alert("Username/password cannot be empty");
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const forgotAlert = () =>
    alert(
      "ADMIN\nUsername: admin\nPassword: admin\n\n USER\nUsername: user\nPassword: user"
    );

  return (
    <div
      className="container p-3"
      style={{ border: "2px solid #FFFFFF", borderRadius: "15px" }}
    >
      <h1>LOGIN</h1>
      <form onSubmit={checkCredentials}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="username">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label text-start" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="row mb-4 ">
          <div className="col d-flex justify-content-end">
            <div className="form-check" style={{ fontSize: "13px" }}>
              <label className="form-check-label" htmlFor="form2Example31">
                Belum punya akun? Register <a href="/registerPage">di sini</a>
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-4 mt-4">
          <div className="d-flex align-item-start">
            <input
              className="form-check-input mx-2"
              type="checkbox"
              value=""
              id="form2Example31"
            />
            Remember me
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-custom mb-2">
            Submit
          </button>
        </div>

        <div className="text-center mb-4">
          <a href="/forgotPasswordPage" onClick={forgotAlert}>
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
