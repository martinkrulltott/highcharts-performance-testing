import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

// Prepare the data
var data = [],
  n = 50,
  turboThreshold = 0,
  i;
for (i = 0; i < n; i += 1) {
  data.push({
    x: Math.pow(Math.random(), 2) * 100,
    y: Math.pow(Math.random(), 2) * 100,
    name: `point ${i}`,
  });
}

if (!Highcharts.Series.prototype.renderCanvas) {
  //throw 'Module not loaded';
}

console.time("scatter");
Highcharts.chart("container", {
  chart: {
    zoomType: "xy",
    height: "100%",
  },

  boost: {
    useGPUTranslations: true,
    usePreAllocated: true,
  },

  xAxis: {
    min: 0,
    max: 100,
    gridLineWidth: 1,
  },

  yAxis: {
    // Renders faster when we don't have to compute min and max
    min: 0,
    max: 100,
    minPadding: 0,
    maxPadding: 0,
    title: {
      text: null,
    },
  },

  title: {
    text: "Scatter chart performance test",
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      type: "scatter",
      color: "rgba(152,0,67,0.1)",
      data: data,
      marker: {
        radius: 3,
      },
    },
  ],

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
      turboThreshold,
    },

    scatter: {
      tooltip: {
        useHTML: true,
        headerFormat: "",
        pointFormat: `<b>{point.name}</b><br>` + `x: {point.x}<br>y: {point.y}`,
      },
    },
  },
});
console.log("------------------------------");
console.log(n + " points");
console.timeEnd("scatter");
