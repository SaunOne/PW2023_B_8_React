import React from "react";
import ReactDOM from "react-dom";
// import AppRouter from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import "react-toastify/dist/ReactToastify.css";
import Test from "./test";
import ShowDataUser from "./pages/adminPage/showDataUser";
import CreateUserPage from "./pages/adminPage/createUserPage";
import UpdateUserPage from "./pages/adminPage/updateUserPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ForgotPasswordPage />
  </React.StrictMode>
);