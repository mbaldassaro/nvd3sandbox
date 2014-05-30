d3.json("mbpie1.json", function(error, data) {   
 
    
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })              
      .color(['red', 'blue', 'purple']) 
      .showLabels(true)
      .labelType("key") //could also use "value" or "percent" for display
  ;
       
    
  d3.select("#chart svg")
        .datum(data)
        .transition().duration(1500)
        .call(chart);

  return chart;
})
});


d3.json("mbpie2.json", function(error, data) {
      
nv.addGraph(function() {
  var chart = nv.models.pieChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .color(['red', 'blue', 'purple'])
      .showLabels(true)
      .labelType("key")
  ;

  d3.select("#chart2 svg")
        .datum(data)
        .transition().duration(350)
        .call(chart);

  return chart;
})
});