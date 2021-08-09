const { Chart } = require("chart.js")

var ctx = document.getElementById("line-chart").getContext('2d')

var chartGraph = new Chart(ctx, {
    type: 'bar'
})