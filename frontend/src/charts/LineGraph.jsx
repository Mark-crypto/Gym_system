import React from "react";

export const LineGraph = () => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Month", "Revenue", "Profits"],
      ["Jan", 100000, 90000],
      ["Feb", 98200, 80000],
      ["Mar", 96500, 60000],
      ["Apr", 90000, 71000],
      ["May", 110000, 10000],
      ["June", 84000, 81000],
      ["July", 77000, 59001],
      ["Aug", 94300, 31000],
      ["Sep", 81000, 70000],
      ["Oct", 69999, 54030],
      ["Nov", 67000, 51900],
      ["Dec", 50000, 27800],
    ]);

    var options = {
      title: "Revenue Distribution (2023-2024)",
      curveType: "function",
      legend: { position: "bottom" },
    };

    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );

    chart.draw(data, options);
  }
  return (
    <>
      <div
        id="curve_chart"
        style={{
          width: "700px",
          height: "400px",
          background: "#e8e8e8",
          borderRight: "2px solid grey",
        }}
      ></div>
    </>
  );
};
