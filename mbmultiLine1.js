var dataset = d3.json("mbMultiLine.json", function(error, data) {

var chart;
    
nv.addGraph(function() {
  chart = nv.models.cumulativeLineChart()
        //.x(function(d) { return d.label })
        //.y(function(d) { return d.value / 100})
        .x(function(d) {return d[0] })
        .y(function(d) {return d[1] / 100 })
      .margin({top: 30, lineChartright: 20, bottom: 50, left: 75})
      //.showValues(false)
      //.tooltips(true)
      .color(d3.scale.category10().range())
      .useInteractiveGuideline(true)
      .transitionDuration(500)
      //.stacked(true)
      .showControls(true);
    
    chart.xAxis
    .tickValues([1225497600000,1243814400000,1351728000000,1362096000000,1372636800000,1380585600000,1383264000000]) //note: using epoch time = milliseconds since 1/1/1970
    .tickFormat(function(d) {
            return d3.time.format('%m/%y')(new Date(d))
          })
        .axisLabel('Month / Year');
       
    chart.yAxis 
        .tickFormat(d3.format('%x'))
        .axisLabel('Percentage');
        

  d3.select('#chart1 svg')
      .datum(data)
      .call(chart);
    
  nv.utils.windowResize(chart.update);
    
  return chart;
});
})


