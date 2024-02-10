import React from "react";
import { Doughnut } from "react-chartjs-2";

const Box_3 = () => {
  const chartData = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Data One",
        data: [100, 120, 210, 326],
      },
    ],
  };
  return <Doughnut data={chartData} />;
};

export default Box_3;
