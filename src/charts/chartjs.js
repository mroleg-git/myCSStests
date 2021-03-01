import "chartstyle.scss";
import CSV from "somedata.csv";

let margin = { top: 10, right: 20, left: 20, bottom: 10 };
let chartContainer = ".chart-container";
let width = 500 - margin.left - margin.right;
let height = 450 - margin.top - margin.bottom;

let svg = d3
  .select(chartContainer)
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function lineChart() {
  let x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(CSV, function (d) {
        return d.price;
      }),
    ])
    .range([0, width]);
  let y = d3
    .scaleLinear()
    .domain(
      d3.extent(CSV, function (d) {
        return d.price;
      })
    )
    .range([height, 0]);

  svg
    .selectAll("rect")
    .data(CSV)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * 25;
    })
    .attr("y", function (d) {
      // return y(d.price);
      return height - d.price;
    })
    .attr("width", function (d) {
      return 20;
    })
    .attr("height", function (d) {
      return d.price;
    })
    .attr("fill", function (d) {
      return d.color;
    });
}

function barChart() {
  let x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(CSV, function (d) {
        return d.price;
      }),
    ])
    .range([0, width]);
  let y = d3
    .scaleLinear()
    .domain(
      d3.extent(CSV, function (d) {
        return d.price;
      })
    )
    .range([height, 0]);

  svg
    .selectAll("rect")
    .data(CSV)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return i * 25;
    })
    .attr("y", function (d) {
      // return y(d.price);
      return height - d.price;
    })
    .attr("width", function (d) {
      return 20;
    })
    .attr("height", function (d) {
      return d.price;
    })
    .attr("fill", function (d) {
      return d.color;
    });
}
function bubleChart() {
  let x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(CSV, function (d) {
        return d.price;
      }),
    ])
    .range([0, width]);

  let y = d3
    .scaleLinear()
    .domain(
      d3.extent(CSV, function (d) {
        return d.price;
      })
    )
    .range([height, 0]);

  let r = d3
    .scaleLinear()
    .domain([
      0,
      Math.sqrt(
        d3.max(CSV, function (d) {
          return d.price;
        })
      ),
    ])
    .range([0, 10]);

  svg
    .selectAll("circle")
    .data(CSV)
    .enter()
    .append("circle")
    .attr("cx", function (d) {
      return x(d.price);
    })
    .attr("cy", function (d) {
      return y(d.price);
    })
    .attr("r", function (d) {
      return r(Math.sqrt(d.price));
    })
    .attr("fill", function (d) {
      return d.color;
    });
}
//barChart();
// bubleChart();
lineChart();
