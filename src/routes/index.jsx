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
import Payment from "../pages/TransaksiLaundry/PaymentPage";
import Order from "../pages/TransaksiLaundry/OrderPage";
import History from "../pages/HistoryPage";
import OurTeam from "../pages/greeting/OurTeamPage";
import About from "../pages/greeting/AboutPage";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/admin/AdminPage";
import AdminShowUser from "../pages/admin/showDataUser";
import AdminCreateUser from "../pages/admin/createUserPage";
import AdminUpdateUser from "../pages/admin/updateUserPage";
import AdminSideNav from "../pages/admin/sideNav";
import ShowDataJenisPengambilan from "../pages/admin/jenis_pengambilan/ShowJenisPengambilan";
import CreateJenisPengambilanPage from "../pages/admin/jenis_pengambilan/CreateJenisPengambilan";

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
          </div>
        ),
      },
      {
        path: "/ourteam",
        element: (
          <div className="">
            <TopNavbar />
            <OurTeam />
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
        element: <Admin />,
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
    ],
  },
]);
35;
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
