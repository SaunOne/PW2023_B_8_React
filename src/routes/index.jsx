import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserLayout from "../layouts/UserLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import Profile from "../pages/ProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";
import Wallet from "../pages/WalletPage";
import TopNavbar from "../components/TopNavbar";
import Payment from "../pages/transaksiLaundry/PaymentPage";
import Order from "../pages/transaksiLaundry/OrderPage";
import History from "../pages/HistoryPage";
import OurTeam from "../pages/greeting/OurTeamPage";
import About from "../pages/greeting/AboutPage";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/admin/AdminPage";

import TampilImage from "../components/modals/tampilImage";
import Footer from "../components/footer";

import AdminShowUser from "../pages/admin/user/showDataUser";
import AdminCreateUser from "../pages/admin/user/createUserPage";
import AdminUpdateUser from "../pages/admin/user/updateUserPage";
import AdminShowLayanan from "../pages/admin/layanan/showDataLayananPage";
import AdminUpdateLayanan from "../pages/admin/layanan/updateLayananPage";
import CreateLayanan from "../pages/admin/layanan/createLayananPage";
import AdminSideNav from "../pages/admin/sideNav";

import ShowDataUser from "../pages/admin/showDataUser";

import ShowDataJenisPengambilan from "../pages/admin/jenis_pengambilan/ShowJenisPengambilan";
import CreateJenisPengambilanPage from "../pages/admin/jenis_pengambilan/CreateJenisPengambilan";
import CreateItem from "../pages/admin/item/createItemPage";
import ShowDataItem from "../pages/admin/item/showDataItemPage";
import UpdateItemLaundry from "../pages/admin/item/updateItemPage";


const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Routes Not Found!</div>,
  },

  {

    children: [
      {
        path: "/",
        element: (
          <div className="">
            <TopNavbar />
            <DashboardPage />
            <Footer></Footer>
          </div>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/about",
        element: (
          <div className="">
            <TopNavbar />
            <About />
            <Footer></Footer>
          </div>
        ),
      },
      {
        path: "/ourteam",
        element: (
          <div className="">
            <TopNavbar />
            <OurTeam />
            <Footer></Footer>
          </div>
        ),
      },
    ],
  },

  {
    path: "/user",
    element: (
      <ProtectedRoutes>
        <UserLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/user",
        element: <DashboardPage />,
      },
      {
        path: "/user/profile",
        element: <Profile />,
      },
      {
        path: "/user/wallet",
        element: <Wallet />,
      },
      {
        path: "/user/payment",
        element: <Payment />,
      },
      {
        path: "/user/order",
        element: <Order />,
      },
      {
        path: "/user/history",
        element: <History />,
      },
      {
        path: "/user/test",
        element: <tampilImage/>
      }
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <AdminLayout />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/admin",
        element: <ShowDataUser />,
      },
      {
        path: "/admin/showDataUser",
        element: <AdminShowUser />,
      },
      {
        path: "/admin/createUser",
        element: <AdminCreateUser />,
      },
      {
        path: "/admin/updateUser",
        element: <AdminUpdateUser />,
      },
      {
        path: "/admin/showDataJenisPengambilan",
        element: <ShowDataJenisPengambilan />,
      },
      {
        path: "/admin/createDataJenisPengambilan",
        element: <CreateJenisPengambilanPage />,
      },
      {
        path: "/admin/createLayanan",
        element: <CreateLayanan />,
      },
      {
        path: "/admin/showDataLayanan",
        element: <ShowDataJenisPengambilan />,
      },
      {
        path: "/admin/updateLayanan",
        element: <AdminUpdateLayanan />,
      },
      {
        path: "/admin/showDataItem",
        element: <ShowDataItem />,
      },
      {
        path: "/admin/createItem",
        element: <CreateItem />,
      },
      {
        path: "/admin/updateItem ",
        element: <UpdateItemLaundry />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
    </>
  );
};
export default AppRouter;
