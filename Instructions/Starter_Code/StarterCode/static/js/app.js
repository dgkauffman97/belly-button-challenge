// Fetch the JSON data
const samples_url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
var data = d3.json(samples_url).then(function(data) {
    console.log(data);
  });

// Create variables
var samples = [data.samples];
var sample_values = [samples.sample_values];
var otu_ids = [samples.otu_ids];
var labels = Object.keys(samples);

// Create horizontal bar chart
let sorted = samples.sort((a, b) => b.sample_values - a.sample_values);
sliced = sorted.slice(0,10);

var trace1 = {
  x: sample_values,
  y: otu_ids,
  type: "bar",
  orientation: "h"
};

var traceData1  = [trace1]

Plotly.newPlot('bar', traceData1);

// Create bubble chart
var trace2 = {
  x: otu_ids,
  y: sample_values,
  mode: 'markers',
  marker: {
    size: sample_values,
    color: otu_ids
  }
};

var traceData2 = [trace2]

Plotly.newPlot('bubble', traceData2);

// Display Metadata

// Update data

