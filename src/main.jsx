import React from "react";
import ReactDOM from "react-dom/client";
// import AppRouter from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import "react-toastify/dist/ReactToastify.css";
import Test from "./test";
import ShowDataUser from "./pages/adminPage/showDataUser";
import CreateUserPage from "./pages/adminPage/createUserPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateUserPage />
  </React.StrictMode>
);