import "../styles/index.scss";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

const POINTS = 1000; // Set number of points
const TURBO = true; // Toggle the turbo mode on or off
const BOOST = false; // Toggle the boost mode on or off
const data = [];

// Prepare the data
for (let i = 0; i < POINTS; i += 1) {
  TURBO
    ? data.push([
        Math.pow(Math.random(), 2) * 100,
        Math.pow(Math.random(), 2) * 100,
      ])
    : data.push({
        x: Math.pow(Math.random(), 2) * 100,
        y: Math.pow(Math.random(), 2) * 100,
        name: `point ${i}`,
      });
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
      turboThreshold: TURBO ? 1 : 0,
      boostThreshold: BOOST ? 1 : 0,
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
console.log(`Turbo: ${TURBO ? "on" : "off"}`);
console.log(`Boost: ${BOOST ? "on" : "off"}`);
console.log(`${POINTS} points`);
console.timeEnd("scatter");
console.log("------------------------------");
