// Declare global variables
let numRows = 2;    // default num rows
let numCols = 3;    // default num cols
let colorSelected; 

// Add a row
function addR() {
    numRows += 1;   // increment numRows
    var table = document.getElementById("grid");
    var row = table.insertRow();            // insert new row
    for (var i = 0; i < numCols; i++) {     // insert numCol cells in new row
        var cell = row.insertCell(0);
        cell.onclick = fillColor();
    }
}

// Add a column
function addC() {
    numCols += 1;   // increment numCols
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {   // for each row
        var cell = table.rows.item(i).insertCell();            // insert new cell (new col)
        cell.onclick = fillColor();
    }
}

// Remove a row (removes last row)
function removeR() {
    numRows -= 1;   // decrement numRows
    var table = document.getElementById("grid");
    table.deleteRow(numRows);            // delete row
}

// Remove a column (removes last column)
function removeC() {
    numCols -= 1;   // decrement numCols
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {   // for each row
        table.rows.item(i).deleteCell(numCols);           // delete one cell
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

function fillColor(){
    var table = document.getElementById("grid");
    table.addEventListener("click", function(cell) {        // for selected cell
        cell.target.style.backgroundColor = colorSelected   // color cell
      });
}

// Fill all uncolored cells
function fillU(){
    var table = document.getElementById("grid");
    var numCells = table.querySelectorAll("td").length;     // get total cells
    for (var i = 0; i < numCells; i++) { 
        var cell = table.getElementsByTagName("td").item(i);    // for each cell
        if (cell.style.backgroundColor == "")                   // if not colored
            cell.style.backgroundColor = colorSelected;         // color with colorSelected
    }
}

// Fill all cells
function fillAll(){
    var table = document.getElementById("grid");
    var numCells = table.querySelectorAll("td").length;     // get total cells
    for (var i = 0; i < numCells; i++) { 
        var cell = table.getElementsByTagName("td").item(i);    // for each cell
        cell.style.backgroundColor = colorSelected;             // color with colorSelected
    }
}

// Clear all cells
function clearAll(){
    var table = document.getElementById("grid");
    var numCells = table.querySelectorAll("td").length;     // get total cells
    for (var i = 0; i < numCells; i++) { 
        var cell = table.getElementsByTagName("td").item(i);    // for each cell
        cell.style.backgroundColor = "";                        // remove color
    }
}