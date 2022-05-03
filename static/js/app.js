// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(dataset => {
	var row =tbody.append("tr");
	Object.entries(dataset).forEach(([key,value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});

var button = d3.select("button");
button.on("click", function() {
	var filteredData = tableData;

	var inputDate = d3.select("#year");
	var inputDateValue = inputDate.property("value");
	if (inputDateValue != "") {
		filteredData = filteredData.filter(dataset => dataset.year === inputDateValue);
	}
	var inputState = d3.select("#state");
	var inputStateValue = inputState.property("value");
	if (inputStateValue != "") {
		filteredData = filteredData.filter(dataset => dataset.state === inputStateValue);
	}
	
	tbody.html("")
	filteredData.forEach(dataset => {
		var row = tbody.append("tr");
		Object.entries(dataset).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});

	// d3.select(#chart)
	// chart.html("")
	// filteredData.forEach(dataset => {
	// 	var chart = anychart.column();
    //     chart.data(dataset);
    //     chart.title("Obesity %");
    //     chart.container("container");
    //     chart.draw();
    //   });
	// })

	
});
