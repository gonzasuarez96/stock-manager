"use client";

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

const ChartWave = () => {
  const [dataWave] = useState([
    {
      category: "Ene",
      value: 750,
    },
    {
      category: "Feb",
      value: 525,
    },
    {
      category: "Mar",
      value: 450,
    },
    {
      category: "Abr",
      value: 775,
    },
    {
      category: "May",
      value: 650,
    },
    {
      category: "Jun",
      value: 650,
    },
    {
      category: "Jul",
      value: 775,
    },
    {
      category: "Ago",
      value: 900,
    },
    {
      category: "Sep",
      value: 525,
    },
    {
      category: "Oct",
      value: 650,
    },
    {
      category: "Nov",
      value: 775,
    },
    {
      category: "Dic",
      value: 750,
    },
  ]);

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: dataWave.map((item) => item.category),
          datasets: [
            {
              label: "Ventas",
              backgroundColor: "RGB(255, 255, 224)",
              data: dataWave.map((item) => item.value),
              fill: true,
              borderColor: "rgba(255, 199, 86, 1)",
            },
          ],
        },
        options: {
          animation: {
            tension: {
              duration: 2000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
          scales: {
            y: {
              min: 0,
              max: 1000,
            },
          },
        },
      });
    }
  }, [dataWave]);

  return (
    <div className="w-full rounded-lg border p-5 shadow-xl">
      <h2 className="mb-2 p-3 text-xl font-extrabold">Ventas por Mes</h2>
      <canvas ref={chartContainer} id="my-chart"></canvas>
    </div>
  );
};

export default ChartWave;
