import React from "react";
import { Line } from "react-chartjs-2";

const Box_2 = () => {
  const chartData = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Data One",
        data: [100, 120, 210, 326],
      },
      {
        label: "Data Two",
        data: [210, 124, 523, 210],
      },
      {
        label: "Data Three",
        data: [125, 875, 654, 454],
      },
    ],
  };
  return <Line data={chartData} />;
};

export default Box_2;
