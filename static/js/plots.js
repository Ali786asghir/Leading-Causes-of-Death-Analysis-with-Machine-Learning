// var trace1 = {
//     x: data_death.map(row => row.Year),
//     y: data_death.map(row => row.nat_Deaths),
//     type: "line"
// };
  
// var data_death=[trace1]

// var layout = {
//   title: "National Number of Deaths",
//   xaxis: { title: "Year" },
//   yaxis: { title: "Number of Deaths"}
// };

// Plotly.newPlot("line-plot", data_death, layout);
/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../clean_datasets/death_natl.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var Years = [];
	var nat_Deaths = ["National Deaths"];

	for (var i = 1; i < data.length; i++) {
		Years.push(data[i][0]);
		nat_Deaths.push(data[i][2]);
	}

	console.log(Years);
	console.log(nat_Deaths);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	Years
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: years,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);