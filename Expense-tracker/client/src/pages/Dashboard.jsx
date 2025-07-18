// pages/Dashboard.jsx
import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export const Dashboard = () => {
  const pieData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Balance",
        data: [6000, 3000],
        backgroundColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ["Food", "Rent", "Travel", "Utilities"],
    datasets: [
      {
        label: "Expenses by Category",
        data: [500, 1200, 300, 700],
        backgroundColor: "#3f51b5",
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="chart-section">
        <div className="chart-box">
          <h3>Income vs Expense</h3>
          <Doughnut data={pieData} />
        </div>
        <div className="chart-box">
          <h3>Expenses by Category</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};
