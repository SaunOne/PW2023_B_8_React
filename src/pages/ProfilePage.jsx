import React from "react";
import { useEffect, useState } from "react";
import { auto } from "@popperjs/core";
import "./css/Profile.css";
import FormProfile from "../components/forms/FormProfile";
import ModalTopUp from "../components/modals/ModalTopUp";

const ProfilePage = () => {

    return (
        <body className="main">
            <div className="row pler mt-3">
                {/* <div className="col-8"> */}
                <div className="container cont">
                    <FormProfile />
                </div>
                {/* </div> */}
            </div>
        </body>
    );
}

export default ProfilePage;