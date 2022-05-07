import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../imgs/logo.png";
import { sideBarData } from "../../data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Sh <span>o</span>p{" "}
        </span>
      </div>

      {/* menu */}

      <div className="menu">
        {sideBarData.map((item, index) => (
          <div
            key={item.id}
            className={selected === index ? "menuItems active" : "menuItems"}
            onClick={() => setSelected(index)}
          >
            <div className="icon">
              <item.icon />
              <span>{item.title}</span>
            </div>
          </div>
        ))}
        <div className="menuItems">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
