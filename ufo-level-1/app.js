// from data.js
var tableData = data;

var tbody = d3.select('tbody')
console.log(data);

data.forEach(function(tableData){
    console.log(tableData)
});

data.forEach(function(tableData){
    console.log(tableData);
    var row = tbody.append("tr");
    
    Object.entries(tableData).forEach(function([key,value]){
        console.log(key, value);
    });
});

data.forEach(function(tableData){
    console.log(tableData);
    var row = tbody.append("tr");

    Object.entries(tableData).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("th");
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');

button.on('click', runEnter);
FormData.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();

    var inputElement = d3.select ("#datetime");
    var inputValue = inputElement.property("value");
    
}