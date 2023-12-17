import React from "react";
import ReactDOM from "react-dom/client";
// import AppRouter from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import 'rsuite/dist/rsuite.min.css';
import "./main.css";
import "react-toastify/dist/ReactToastify.css";
import Test from "./test";
import ShowDataUser from "./pages/adminPage/showDataUser";
import CreateUserPage from "./pages/adminPage/createUserPage";
import ProfilePage from "./pages/ProfilePage";
import PilihLayananPage from "./pages/PilihLayananPage";
import PaymentPage from "./pages/PaymentPage";
import NavbarUser from "./pages/NavbarUser";
import WalletPage from "./pages/WalletPage";
import TeamPage from "./pages/TeamPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaymentPage/>
    {/* <PilihLayananPage/> */}
    {/* <ProfilePage/> */}
    {/* <NavbarUser/> */}
    {/* <WalletPage></WalletPage> */}
    {/* <TeamPage></TeamPage> */}
  </React.StrictMode>
);