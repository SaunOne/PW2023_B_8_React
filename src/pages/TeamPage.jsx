import React from "react";
import { useEffect, useState } from "react";
import { auto } from "@popperjs/core";
import { Panel } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./css/Profile.css";

const TeamPage = () => {

    return (
        <div style={{padding:"4rem"}}>
            <h3>Our Team</h3>
            <h5>Kelompok # Pemrograman Web 2023 UAJY</h5>
            <div className="row mt-5">
                <div className="col-4">
                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="./src/assets/images/profile2.png" height="240" />
                        <Panel header="Tinar" style={{ fontWeight: "bold" }}>
                            <p>
                                <small style={{ fontWeight: "lighter" }}>
                                    A suite of React components, sensible UI design, and a friendly development experience.
                                </small>
                                <div className="row">
                                    <div className="col d-flex mt-3" style={{ justifyContent: "space-between", paddingLeft: "4rem", paddingRight: "4rem" }}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                </div>
                            </p>
                        </Panel>
                    </Panel>
                </div>
                <div className="col-4">
                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="./src/assets/images/profile2.png" height="240" />
                        <Panel header="Yerico" style={{ fontWeight: "bold" }}>
                            <p>
                                <small style={{ fontWeight: "lighter" }}>
                                    A suite of React components, sensible UI design, and a friendly development experience.
                                </small>
                                <div className="row">
                                    <div className="col d-flex mt-3" style={{ justifyContent: "space-between", paddingLeft: "4rem", paddingRight: "4rem" }}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                </div>
                            </p>
                        </Panel>
                    </Panel>
                </div>
                <div className="col-4">
                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                        <img src="./src/assets/images/profile2.png" height="240" />
                        <Panel header="Gideon" style={{ fontWeight: "bold" }}>
                            <p>
                                <small style={{ fontWeight: "lighter" }}>
                                    A suite of React components, sensible UI design, and a friendly development experience.
                                </small>
                                <div className="row">
                                    <div className="col d-flex mt-3" style={{ justifyContent: "space-between", paddingLeft: "4rem", paddingRight: "4rem" }}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </div>
                                </div>
                            </p>
                        </Panel>
                    </Panel>
                </div>
            </div>
        </div>
    );
}
export default TeamPage;