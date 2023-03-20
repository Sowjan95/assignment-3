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
        row.insertCell(0);
    }
}

// Add a column
function addC() {
    numCols += 1;   // increment numCols
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {   // for each row
        table.rows.item(i).insertCell();            // insert new cell (new col)
    }
}

// Remove a row
function removeR() {
    numRows -= 1;   // decrement numRows
    var table = document.getElementById("grid");
    table.deleteRow(0);            // delete row
}

// Remove a column
function removeC() {
    numCols -= 1;   // decrement numCols
    var table = document.getElementById("grid");
    for (var i = 0; i < table.rows.length; i++) {   // for each row
        table.rows.item(i).deleteCell(0);           // delete one cell
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}