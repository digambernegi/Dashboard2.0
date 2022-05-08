import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../imgs/logo.png";
import { sideBarData } from "../../data/data";
import { UilSignOutAlt,UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

function Sidebar() {
  const [selected, setSelected] = useState(0);
const[mobile,setMobile]=useState(false);

const sidebarVarient={
  true:{
    left:"0"
  },
  false:{
    left:'-60%'
  }
}

  return (
    <>
    <div className="Barmenu"
    style={mobile? {left:'60%'}:{left:'5%'}}
    onClick={()=> setMobile(!mobile)}
    >
        <UilBars/>
      </div>
      <motion.div
      variants={sidebarVarient}
      animate={window.innerWidth<=768? `${mobile}`:''}

      className="sidebar">
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
    </motion.div>
    </>
  );
}

export default Sidebar;
