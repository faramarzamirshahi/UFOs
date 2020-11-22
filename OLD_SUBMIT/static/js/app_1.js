// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// start building
// function to add the table to <tbody>
/*
By starting our line of code with Object.values, 
we're telling JavaScript to reference one object from the array of UFO sightings. 
By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. 
We've added forEach((val) to specify that we want one object per row.
*/
function buildTable(data) {
    tbody.html(""); // clear the table i.e. create a blank canvas.
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val); // add only the text "1/2/2010"
        });
    });    
}

// function to filter data
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
