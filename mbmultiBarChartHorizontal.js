//d3.json("mbmultiBarHorizontalChart.json", function(error, data) {
     
var chart;
    
nv.addGraph(function() {
  chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value / 100 })
      .margin({top: 30, right: 20, bottom: 50, left: 75})
      //.showValues(true)
      //.tooltips(false)
      .barColor(d3.scale.category20().range())
      .transitionDuration(750)
      .stacked(true)
      //.showControls(false);

  chart.yAxis
    .tickFormat(d3.format('%'));

  d3.select('#chart1 svg')
      .datum(long_short_data)
      .call(chart);
         
  nv.utils.windowResize(chart.update);

  chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart;
//})
});