import React from "react";
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
import "./Profile.css";
import FormProfile from "../components/forms/FormProfile";
import WalletDisplay from "../components/WalletDisplay";

const ProfilePage = () => {

  return (
    <body className="main">
        <div className="row mt-3">
            <div className="col-8">
                <div className="container cont">
                    <FormProfile/>
                </div>
            </div>
            <div className="col-4">
                <div className="container cont-wallet">
                    <WalletDisplay/>
                </div>
            </div>
        </div>
    </body>
    
  );
}

export default ProfilePage;