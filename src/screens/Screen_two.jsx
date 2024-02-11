import React from "react";
import "./Screen_two.css";
import Box_1 from "../components/screenTwo/Box_1";
import Box_2 from "../components/screenTwo/Box_2";
import Box_3 from "../components/screenTwo/Box_3";
import Box_4 from "../components/screenTwo/Box_4";

const Screen_two = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="box box-2">
          <Box_2 />
        </div>
        <div className="box box-3">
          <Box_3 />
        </div>
        <div className="box box-1">
          <Box_1 />
        </div>
        <div className="box box-3">
          <Box_4 />
        </div>
      </div>
    </div>
  );
};

export default Screen_two;
