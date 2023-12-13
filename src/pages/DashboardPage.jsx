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
// import { GetAllContents } from "../api/apiContent";
import { getThumbnail } from "../api";
// import { AddToWatchLater } from "../api/apiWatchLater";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div></div>
  );
};
export default DashboardPage;
