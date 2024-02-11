import React from "react";
import { PolarArea } from "react-chartjs-2";

const Box_4 = () => {
  const data = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: [2, 5, 4, 6],
      },
    ],
  };
  return <PolarArea data={data} />;
};

export default Box_4;
