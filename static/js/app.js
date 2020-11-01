// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// start building
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