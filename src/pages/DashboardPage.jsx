import { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  Row,
  Spinner,
  Stack,
  Button,
} from "react-bootstrap";
import { getThumbnail } from "../api";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const DashboardPage = () => {

  const [isLogin,setIsLogin] = useState(false);

  useEffect(() => {
    var token = sessionStorage.getItem('token');
    if(token != null){
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  },[]);

  return (
   <>
   {isLogin? (
    <h1>Login</h1>

   ) : (
    <h1>Belum Login</h1>
    
   )}
  </>  
  );
};
export default DashboardPage;
