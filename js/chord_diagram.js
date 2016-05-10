// From http://mkweb.bcgsc.ca/circos/guide/tables/
var matrix = [
  [11975,  5871, 8916, 2868], //black row -- cols are also black, yellow, brown and red
  [ 1951, 10048, 2060, 6171], //yellow
  [ 8010, 16145, 8090, 8045], //brown
  [ 1013,   990,  940, 6907] //red
];

matrix = [
[0,2115,531,1027,10075,285,759,1691,885,1107,543,601,6300,383,380,9088,691,382,426,1534,395,2463,370,669,727],
[2115,0,2244,2740,9788,998,2472,3404,2598,2820,2256,2314,4013,2096,2093,11801,2404,2095,2139,3247,2108,4176,2083,1382,2440],
[531,2244,0,1156,4204,40,888,1820,1014,1236,672,730,2429,512,509,4217,820,511,555,1663,524,3892,499,798,856],
[1027,2740,1156,0,4700,910,1384,2316,1510,1732,1168,1226,2925,1008,1005,6713,1316,1007,1051,2159,1020,3088,995,1294,1352],
[10075,9788,4204,4700,0,5958,4432,5364,4558,4780,4216,4274,5973,4056,4053,7761,4364,4055,4099,9207,4068,6136,4043,4342,4400],
[285,998,40,910,5958,0,64,1574,768,990,426,484,3183,266,263,3971,574,265,309,1417,278,2346,253,552,610],
[759,2472,888,1384,4432,64,0,2048,1242,1464,900,958,2657,740,737,4445,1048,739,783,1891,752,2820,727,1026,1084],
[1691,3404,1820,2316,5364,1574,2048,0,2174,1396,1832,1890,4589,1672,1669,5377,1980,1671,1715,2823,1684,3752,1659,1958,2016],
[885,2598,1014,1510,4558,768,1242,2174,0,1590,1026,1084,2783,866,863,8571,1174,865,909,2017,878,2946,853,1152,1210],
[1107,2820,1236,1732,4780,990,1464,1396,1590,0,1248,1306,3005,1088,1085,4793,1396,1087,1131,2239,1100,4669,1075,1374,1432],
[543,2256,672,1168,4216,426,900,1832,1026,1248,0,742,2441,524,521,4229,832,523,567,1675,536,2604,511,810,868],
[601,2314,730,1226,4274,484,958,1890,1084,1306,742,0,2499,582,579,4287,890,581,625,1733,594,2662,569,868,926],
[6300,4013,2429,2925,5973,3183,2657,4589,2783,3005,2441,2499,0,2281,2278,11006,2589,2280,2324,3432,2293,4361,2268,2567,2625],
[383,2096,512,1008,4056,266,740,1672,866,1088,524,582,2281,0,361,4069,672,363,407,1515,376,2444,351,650,708],
[380,2093,509,1005,4053,263,737,1669,863,1085,521,579,2278,361,0,4066,669,360,404,1512,373,2441,348,647,705],
[9088,11801,4217,6713,7761,3971,4445,5377,8571,4793,4229,4287,11006,4069,4066,0,4377,4068,4112,5220,4081,10149,4056,4355,4413],
[691,2404,820,1316,4364,574,1048,1980,1174,1396,832,890,2589,672,669,4377,0,671,715,1823,684,2752,659,958,1016],
[382,2095,511,1007,4055,265,739,1671,865,1087,523,581,2280,363,360,4068,671,0,406,1514,375,2443,350,649,707],
[426,2139,555,1051,4099,309,783,1715,909,1131,567,625,2324,407,404,4112,715,406,0,1558,419,1487,394,693,751],
[1534,3247,1663,2159,9207,1417,1891,2823,2017,2239,1675,1733,3432,1515,1512,5220,1823,1514,1558,0,1527,1595,1502,1801,1859],
[395,2108,524,1020,4068,278,752,1684,878,1100,536,594,2293,376,373,4081,684,375,419,1527,0,1456,363,662,720],
[2463,4176,3892,3088,6136,2346,2820,3752,2946,4669,2604,2662,4361,2444,2441,10149,2752,2443,1487,1595,1456,0,2431,2730,2788],
[370,2083,499,995,4043,253,727,1659,853,1075,511,569,2268,351,348,4056,659,350,394,1502,363,2431,0,637,695],
[669,1382,798,1294,4342,552,1026,1958,1152,1374,810,868,2567,650,647,4355,958,649,693,1801,662,2730,637,0,101],
[727,2440,856,1352,4400,610,1084,2016,1210,1432,868,926,2625,708,705,4413,1016,707,751,1859,720,2788,695,101,0]
];

var labels = ['12 string guitar','acoustic guitar','banjo','baritone saxophone','bass guitar','classical guitar','congas','double bass','drumset','electric bass guitar','fiddle','flugelhorn','guitars','harp','harpsichord','keyboard','mandolin','Mellotron','oboe','organ','sampler','trumpet','turntable(s)','vibraphone','viola']

var chord = d3.layout.chord()
    .padding(.05)
    .sortSubgroups(d3.descending)
    .matrix(matrix);

var width = 960,
    height = 600,
    innerRadius = Math.min(width, height) * .35,
    outerRadius = innerRadius * 1.1;

/*var fill = d3.scale.ordinal()
    .domain(d3.range(25))
    .range(["#000000", "#FFDD89", "#957244", "#F26223"]);*/

var fill = d3.scale.category20();

var svg = d3.select("#chord-diagram").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.append("g").selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .style("fill", function(d) { return fill(d.index); })
    .style("stroke", function(d) { return fill(d.index); })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

var ticks = svg.append("g").selectAll("g")
    .data(chord.groups)
  .enter().append("g").selectAll("g")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

/*ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#000");*/

ticks.append("text")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .style("font-size", "8px")
    .text(function(d) { return d.label; });

svg.append("g")
    .attr("class", "chord")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { return fill(d.target.index); })
    .style("opacity", 1);

// Returns an array of tick angles and labels, given a group.
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i == 10 ? labels[d.index] : null
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}
