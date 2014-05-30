d3.json("mbsimpleLine1.json", function(error, data) {

nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1] / 100 })
                .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
                //.color(d3.scale.category10().range())
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
                .transitionDuration(350)  //how fast do you want the lines to transition?
                .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
                .showYAxis(true)        //Show the y-axis
                .showXAxis(true)        //Show the x-axis
  ;

  chart.xAxis     //Chart x-axis settings
    .tickValues([1225497600000,1243814400000,1351728000000,1362096000000,1372636800000,1380585600000,1383264000000]) //note: using epoch time = milliseconds since 1/1/1970
    .tickFormat(function(d) {
        return d3.time.format('%m/%y')(new Date(d))
          })
    .axisLabel('Month / Year');

  chart.yAxis     //Chart y-axis settings
    .tickFormat(d3.format('%x'))
    .axisLabel('Percentage');

  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.   
      .datum(data)         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  //nv.utils.windowResize(function() { chart.update() });
    nv.utils.windowResize(chart.update);
  return chart;
})
});

