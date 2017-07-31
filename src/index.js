import * as d3 from "d3";

console.log(`---- learning D3 @ ${d3.version} ----`);

const stage = document.querySelector('#stage');

const rnd = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lineFn = () => {
  const width = 200;
  const height = 600;
  const xScale = d3.scaleLinear().domain([0, 200]).range([width, 0]);
  const yScale = d3.scaleLinear().domain([0, 10]).range([0, height]);

  return d3.line()
    .x(function (d) { return xScale(d); })
    .y(function (d,i) { return yScale(i); })
    .curve(d3.curveBasis);
}

const setupSvg = () => {
  let svgContainer = d3.select(stage).append("svg")
    .attr("width", 200)
    .attr("height", 600);

  return svgContainer;
}

const drawCurve = (svgContainer, name, data, lineFn, clrStr) => {

  let lineGraph = svgContainer.append("path")
    .attr("class", name)
    .attr("d", lineFn(data))

  lineGraph
    .attr("stroke", clrStr)
    .attr("stroke-width", 0)
    .attr("fill", clrStr);

}

const updateCurve = (data, name, lineFn) => {
    data[rnd(1, 4)] = rnd(0, 200);

    let svg = d3.select("svg").transition();

    svg.select(`.${name}`)
      .duration(750)
      .attr("d", lineFn(data));
}

const main = () => {
  let lineData = [0, 20, 10, 200, 5, 123, 1, 33, 10, 99, 0];
  let lineData2 = [0, 20, 10, 100, 5, 0];

  const svg = setupSvg();

  drawCurve(svg, 'line1', lineData, lineFn(), 'rgba(123, 255, 10, 0.33)');
  drawCurve(svg, 'line2', lineData2, lineFn(), 'rgba(255, 123, 10, 0.33)');

  setInterval(() => {
    updateCurve(lineData, 'line1', lineFn());
    updateCurve(lineData2, 'line2', lineFn());
  }, 100);


};

main();