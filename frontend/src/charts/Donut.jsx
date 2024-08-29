import React from "react";

export const Donut = () => {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Month", "Membership"],
      ["January", 50],
      ["February", 43],
      ["March", 43],
      ["April TV", 37],
      ["May", 54],
      ["June", 29],
      ["July", 30],
      ["August", 39],
      ["September", 47],
      ["October", 38],
      ["November", 33],
      ["December", 20],
    ]);

    var options = {
      title: "Membership distribution (2023-2024)",
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("donutchart")
    );
    chart.draw(data, options);
  }
  return (
    <>
      <div id="donutchart" style={{ width: "600px", height: "400px" }}></div>
    </>
  );
};
