import "../charts/chartstyle.scss";
import CSV from "../charts/somedata.csv";

let margin = { top: 20, right: 20, left: 20, bottom: 20 };
let chartContainer = ".chart-container";
let svgWidth = document.querySelector(".chart-container").offsetWidth;
let svgHeight = document.querySelector(".chart-container").offsetHeight;
// console.log(svgWidth, svgHeight);
let width = svgWidth - margin.left - margin.right;
let height = svgHeight - margin.top - margin.bottom;

let svg = d3
  .select(chartContainer)
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function pieChart() {
  let radius = Math.min(width, height) / 2;

  let g = svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  let pie = d3.pie().value(function (d) {
    return d.percent;
  });

  let path = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius * 0.75);

  let label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(radius / 0.9);

  let arc = g
    .selectAll(".arc")
    .data(pie(CSV))
    .enter()
    .append("g")
    .attr("class", "arc");

  let color = d3.scaleOrdinal(
    CSV.map(function (key) {
      return key.color;
    })
  );

  arc
    .append("path")
    .attr("d", path)
    .attr("fill", function (d) {
      return color(d.data.browser);
    })
    .attr("stroke", "white");

  // console.log(arc);
  // текст меток
  arc
    .append("text")
    .attr("transform", function (d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .text(function (d) {
      return d.data.browser;
    });
  //заголовок
  // svg
  //   .append("g")
  //   .attr("transform", "translate(" + (width / 2 - 120) + "," + 20 + ")")
  //   .append("text")
  //   .text("Browser use statistics - Jan 2017")
  //   .attr("class", "title");
}
function barChart() {
  let x = d3
    .scaleLinear()
    .domain([
      0,
      CSV.length,
      // d3.max(CSV, function (d) {
      //   return d.percent;
      // }),
    ])
    .range([0, width]);
  let y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(CSV, function (d) {
        return d.percent;
      }),
    ])
    .range([height, 0]);

  svg
    .selectAll("rect")
    .data(CSV)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * x(1);
    })
    .attr("y", function (d) {
      return y(d.percent);
    })
    .attr("width", function (d) {
      return x(1);
    })
    .attr("height", function (d) {
      // console.log(y(0) - y(d.percent));
      return y(0) - y(d.percent);
    })
    .attr("fill", function (d) {
      return d.color;
    });

  let xAxis = (g) =>
    g.attr("transform", `translate(0,${height})`).call(d3.axisTop(x));

  let yAxis = (g) =>
    g.attr("transform", `translate(0,0)`).call(d3.axisRight(y));

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);
}
function bubleChart() {
  let x = d3.scaleLinear().domain([0, CSV.length]).range([0, width]);

  let y = d3
    .scaleLinear()
    .domain(
      [
        0,
        d3.max(CSV, function (d) {
          return d.percent;
        }),
      ]
      // d3.extent(CSV, function (d) {
      //   return d.percent;
      // })
    )
    .range([height, 0]);

  let r = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(CSV, function (d) {
        return d.percent;
      }),
    ])
    .range([0, 80]);

  svg
    .selectAll("circle")
    .data(CSV)
    .enter()
    .append("circle")
    .attr("cx", function (d, i) {
      return x(1) * i;
    })
    .attr("cy", function (d) {
      return y(d.percent);
    })
    .attr("r", function (d) {
      return r(d.percent);
    })
    .attr("fill", function (d) {
      return d.color;
    });
}
// pieChart();
barChart();
// bubleChart();
