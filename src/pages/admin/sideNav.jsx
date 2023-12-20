import { Sidenav, Nav, Toggle } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import { useState } from "react";
import React from "react";
import './SidenavCustom.css';

const SidenavCustom = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <div className={`sidenav-container ${expanded ? 'expanded' : 'collapsed'}`}>
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        style={{
          height: "100vh", // Sesuaikan tinggi yang diinginkan
          transition: "height 0.3s ease",
        }}
      >
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />} className="text-start">
              Show Data User
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />} className="text-start">
              Create User
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<GroupIcon />} className="text-start">
              Edit User
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        />
      </Sidenav>
    </div>
  );
};

export default SidenavCustom;
