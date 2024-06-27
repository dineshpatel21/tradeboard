// src/ProfitLossChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProfitLossChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Profit & Loss",
        data: [-50000, 0, 100000, 50000, 0],
        fill: false,
        backgroundColor: "rgba(123, 97, 255, 0.5)",
        borderColor: "rgba(123, 97, 255, 1)",
        pointBackgroundColor: "rgba(123, 97, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(123, 97, 255, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value === 1000000) return "+1L";
            if (value === 50000) return "+50K";
            if (value === 0) return "0";
            if (value === -50000) return "-50K";
            if (value === -1000000) return "-1L";
            return value;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%",marginBottom:24  }}>
      <Card style={{backgroundColor: "rgba(250, 247, 255, 1)",}}>
        <Card.Body>
          <Card.Title>Profit & Loss</Card.Title>
          <Line data={data} options={options} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfitLossChart;
