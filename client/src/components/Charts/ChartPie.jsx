"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const ChartPie = () => {
  const [dataPie] = useState([
    {
      category: "Adaptador",
      value: 143,
    },
    {
      category: "Cables",
      value: 35,
    },
    {
      category: "Cintas",
      value: 209,
    },
    {
      category: "Discos",
      value: 78,
    },
    {
      category: "Hojas",
      value: 182,
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
        type: "doughnut",
        data: {
          labels: dataPie.map((item) => item.category),
          datasets: [
            {
              label: "Unidades",
              data: dataPie.map((item) => item.value),
              backgroundColor: [
                "rgba(137, 181, 232, 1)",
                "rgba(136, 237, 158, 1)",
                "rgba(147, 223, 234, 1)",
                "rgba(252, 215, 120, 1)",
                "rgba(254, 149, 149, 1)",
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            subtitle: {
              display: true,
              text: "Categorias",
              position: "top",
              align: "start",
            },
            legend: {
              display: true,
              position: "left",
            },
          },
          layout: {
            padding: {
              bottom: 20,
              left: 20,
              right: 20,
            },
          },
        },
      });
    }
  }, [dataPie]);

  return (
    <div className="h-3/4 w-full rounded-lg border p-5 shadow-xl">
      <h2 className="mb-2 p-3 text-xl font-extrabold">Más Vendidos</h2>
      <canvas
        ref={chartContainer}
        id="my-chart"
        style={{ maxWidth: "100%", maxHeight: "240px", marginTop: "0,5em" }}
      ></canvas>
    </div>
  );
};

export default ChartPie;
