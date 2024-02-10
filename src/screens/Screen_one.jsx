import React from "react";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import PieChart from "../components/PieChart";
import { UserData } from "../data/data";

const Screen_one = () => {
  const barChartData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["lightBlue"],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["lightGray"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const lineChartData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["lightBlue"],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: ["lightGray"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const pieChartData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["lightBlue"],
        borderColor: "black",
        borderWidth: 2,
      },
      // {
      //   label: "User Lost",
      //   data: UserData.map((data) => data.userLost),
      //   backgroundColor: ["lightGray"],
      //   borderColor: "black",
      //   borderWidth: 2,
      // },
    ],
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <div
        style={{
          width: "70%",
          margin: "50px",
        }}
      >
        <BarChart chartData={barChartData} />
      </div>
      <div
        style={{
          margin: "50px",
          width: "70%",
        }}
      >
        <LineChart data={lineChartData} />
      </div>
      <div
        style={{
          margin: "50px",
          width: "70%",
          height: "50%",
        }}
      >
        <PieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default Screen_one;
