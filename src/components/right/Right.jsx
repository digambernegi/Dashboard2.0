import React from "react";
import "./right.css";
import Update from "./updates/Update";
import Review from './reviews/Review'

function Right() {
  return (
    <div className="right">
      <div className="">
        <h3>Updates</h3>
        <Update/>
      </div>
      <div className="">
        <h3> Customer Reviews</h3>
        <Review/>
      </div>
    </div>
  );
}

export default Right;
