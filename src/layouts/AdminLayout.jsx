import { Outlet } from "react-router-dom";
// import component
import TopNavbarAdmin from "../components/TopNavbarAdmin";
//mengatur route yang akan ditampilkan di navbar
const routes = [
  {
    path: "/user",
    name: "Home",
  },
  {
    path: "/user/order",
    name: "Order",
  },
  {
    path: "/user/history",
    name: "History",
  },

];
const AdminLayout = ({ children }) => {
  return (
    <div className="mt-4 pt-5">
      <TopNavbarAdmin routes={routes} />
      {children ? children : <Outlet />}
    </div>
  );
};
export default AdminLayout;
