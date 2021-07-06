import React from "react";
import ReactStars from "react-star-rating-component";

import "../../scc/ReviewForm.css";

export default function Rate(props) {
  return (
    <div>
      <ReactStars
        className="reactStars"
        name="simple-controlled"
        onClick={props.handleRateChange}
        value={props.newRate}
      />
    </div>
  );
}
