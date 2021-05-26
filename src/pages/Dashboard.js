import React, { useState, useEffect } from "react";
import "./Dashboard.css";

import axios from "../utils/axios.js";
import { Bar, Line } from "react-chartjs-2";

const Dashboard = () => {
  const [chartData, setChartData] = useState({});

  async function fetchData() {
    let empSal = [];
    let empAge = [];
    axios
      .get("/employees")
      .then((res) => {
        console.log(res);
        for (const obj of res.data.data) {
          empSal.push(parseInt(obj.employee_salary));
          empAge.push(parseInt(obj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "Age to Salary",
              data: empSal,
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div>
        <Bar data={chartData} options={{ maintainAspectRatio: true }} />
      </div>
      <div>
        <Line data={chartData} options={{ maintainAspectRatio: true }} />
      </div>
    </div>
  );
};

export default Dashboard;
