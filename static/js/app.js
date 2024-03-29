const tableData = data;
var tbody = d3.select("tbody");
function buildTable(data) {
  tbody.html("");
 
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    }
    );
  });
}
function filteredTable() {
    var date, city, state, country, shape, filteredData;
    date = d3.select("#datetime").property("value");
    city = d3.select("#city").property("value");
    state = d3.select("#state").property("value");
    country = d3.select("#country").property("value");
    shape = d3.select("#shape").property("value");
    filteredData = tableData;
    
  if (date){filteredData = filteredData.filter(row => row.datetime === date);}
  if (city){ filteredData = filteredData.filter(row => row.city === city);}
  if (state){filteredData = filteredData.filter(row => row.state === state);}
  if (country){filteredData = filteredData.filter(row => row.country === country);}
  if (shape){filteredData = filteredData.filter(row => row.shape === shape);}

// Rebuild the table using the filtered data
// @NOTE: If no date was entered, then filteredData will
// just be the original tableData.
buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", filteredTable);

// Build the table when the page loads
buildTable(tableData);