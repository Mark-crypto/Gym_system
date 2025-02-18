import React from "react";

export const BarChart2 = () => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Element", "Density", { role: "style" }],
      ["Copper", 8.94, "#b87333"],
      ["Silver", 10.49, "silver"],
      ["Gold", 19.3, "gold"],
      ["Platinum", 21.45, "color: #e5e4e2"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([
      0,
      1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation",
      },
      2,
    ]);

    var options = {
      title: "Density of Precious Metals, in g/cm^3",
      width: 600,
      height: 400,
      bar: { groupWidth: "95%" },
      legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(
      document.getElementById("barchart_values")
    );
    chart.draw(view, options);
  }
  return (
    <>
      <div
        id="barchart_values"
        style={{ width: "300px", height: "400px" }}
      ></div>
    </>
  );
};
