d3.json("mbdonut1.json", function(error, data) {   
 
    
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })              
      //.color(['red', 'blue', 'purple']) 
      .showLabels(true)
      .labelType("key") //could use "key" "value" or "percent" for display
      //.donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
      //.donutRatio(0.0)     //Configure how big you want the donut hole size to be.
      ;    
    
  d3.select("#chart svg")
        .datum(data)
        .transition().duration(1500)
        .call(chart);

  return chart;
})
});
