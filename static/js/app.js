// from data.js
var tableData = data;

var filter = d3.select("#filter-btn");

var reset = d3.select("#reset-btn");

var tbody = d3.select("tbody");

function renderTable(ufoDatas) {
	ufoDatas.forEach(datas => {
		var row = tbody.append("tr");
		Object.values(datas).forEach(value =>{
        var cell = row.append("td");
        cell.text(value);
	});
	});	
}

function filterTableButton() {
	
	d3.event.preventDefault();
	
	var searchDate = d3.select("#datetime").property("value");
	var searchCity = d3.select("#city").property("value");
	var searchState = d3.select("#state").property("value");
	var searchCountry = d3.select("#country").property("value");
	var searchShape = d3.select("#shape").property("value");

	var filteredData = data;

	if (searchDate != ""){
    	filteredData = filteredData.filter(filterdata => filterdata.datetime === searchDate);
    }
    if (searchCity !=""){
    	filteredData = filteredData.filter(filterdata => filterdata.city.toLowerCase() === searchCity.toLowerCase());
    }
    if (searchState !=""){
        filteredData = filteredData.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
        }
    if (searchCountry !=""){
        filteredData = filteredData.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
        }
    if (searchShape !=""){
        filteredData = filteredData.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
        }

    tbody.html('');
	renderTable(filteredData);
	document.getElementById("myForm").reset();
}

function resetTableButton() {
	tbody.html('');
	renderTable(tableData);
}

renderTable(tableData);
filter.on("click", filterTableButton );
reset.on("click", resetTableButton );
