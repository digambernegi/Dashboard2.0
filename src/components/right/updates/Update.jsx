import React from "react";
import "./update.css";
import { UpdatesData } from "../../../data/data";

function Update() {
  return (
    <div className="updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="personimg" />
            <div className="notification">
              <div className="">
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Update;
