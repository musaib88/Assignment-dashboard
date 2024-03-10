import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function DonutChart({ croudFund, foundationFund }) {
  const options = {
    chart: {
      type: "pie",
      height: "250px",
      spacing: [0, 0, 0, -30],
    },
    title: {
      text: "Initial Distribution",
      verticalAlign: "top",
      align: "middle",
      y: 25,
      x: 42,
    },
    plotOptions: {
      pie: {
        innerSize: "65%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemStyle: {
        fontSize: "16px",
      },
      labelFormat: "{name}: {percentage:.f}%",
    },
    credits: {
      enabled: false, // Disable Highcharts link
    },

    series: [
      {
        name: "Disributions",
        data: [
          {
            name: "Croud Sale Investors",
            y: croudFund,
            color: "#0000FF",
          },
          {
            name: "Foundation",
            y: foundationFund,
            color: "#FFA500",
          },
        ],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
