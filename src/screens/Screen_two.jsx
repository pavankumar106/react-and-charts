import React from "react";
import "./Screen_two.css";
import Box_1 from "../components/Box_1";
import Box_2 from "../components/Box_2";
import Box_3 from "../components/Box_3";

const Screen_two = () => {
  return (
    <div className="container">
      <div className="box-1">
        <Box_1 />
      </div>
      <div className="lower">
        <div className="box-2">
          <Box_2 />
        </div>
        <div className="box-3">
          <Box_3 />
        </div>
      </div>
    </div>
  );
};

export default Screen_two;
