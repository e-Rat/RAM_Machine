document.addEventListener("DOMContentLoaded", addBtnProgram);
document.addEventListener("DOMContentLoaded", addBtnMemory);
document.addEventListener("DOMContentLoaded", addArrow);
document.addEventListener("DOMContentLoaded", addArrowFunction);

var programCurrentRow = "programRow0";
var memoryCurrentRow = "memoryRow0";

function addBtnProgram() {
    const programTable = document.getElementById("ProgramTable");
    const rows = programTable.querySelectorAll("tr");

    for (let i = 2; i < rows.length - 1; i++) {
        let cells = rows[i].querySelectorAll("td");
        let lastCell = cells[cells.length - 1];
        lastCell.style.display = "none";
    }

    let lastRow = rows[rows.length - 1];
    let lastCell = lastRow.querySelector("td:last-child");

    if (!lastCell.querySelector("button")) {
        const addBtn = document.createElement("button");
        addBtn.textContent = "+";
        lastCell.appendChild(addBtn);
        addBtn.addEventListener("click", addRowProgram);
    }
}
function addBtnMemory(){
    const memoryTable = document.getElementById("MemoryTable");
    const rows = memoryTable.querySelectorAll("tr");

    for (let i = 2; i < rows.length - 1; i++) {
        let cells = rows[i].querySelectorAll("td");
        let lastCell = cells[cells.length - 1];
        lastCell.style.display = "none";
    }

    let lastRow = rows[rows.length - 1];
    let lastCell = lastRow.querySelector("td:last-child");

    if (!lastCell.querySelector("button")) {
        const addBtn = document.createElement("button");
        addBtn.textContent = "+";
        lastCell.appendChild(addBtn);
        addBtn.addEventListener("click", addRowMemory);
    }
}

function addArrow(){
    const row = document.getElementById(programCurrentRow);
    row.cells[0].textContent = "⇒";
}

const programTable = document.getElementById("ProgramTable");

function changeCurrentRow(event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
        return;
    }

    const clickedRow = event.currentTarget;

    for (let i = 2; i < programTable.rows.length; i++) {
        let firstCell = programTable.rows[i].cells[0];
        if (firstCell) {
            firstCell.textContent = "";
        }
    }

    clickedRow.cells[0].textContent = "⇒";
    currentRow = clickedRow.id;
    console.log(currentRow);
    programCurrentRow = currentRow;
}

function addArrowFunction(){
    for(let i = 2; i < programTable.rows.length; i++){
        programTable.rows[i].addEventListener("click", (event) => changeCurrentRow(event));
    }
}

function addRowProgram() {
    const programTable = document.getElementById("ProgramTable");
    const tbody = programTable.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    let rowNum = rows.length - 2;

    const newRow = document.createElement("tr");
    newRow.id = "programRow" + rowNum;

    const arrowCell = document.createElement("td");
    arrowCell.textContent = "";

    const numCell = document.createElement("td");
    numCell.textContent = rowNum;

    const labelCell = document.createElement("td");
    const labelInput = document.createElement("input");
    labelInput.type = "text";
    labelCell.appendChild(labelInput);

    const selectCell = document.createElement("td");
    const newSelect = document.getElementById("instruction0").cloneNode(true);
    newSelect.id = "instruction" + rowNum;
    selectCell.appendChild(newSelect);

    const argumentCell = document.createElement("td");
    const argumentInput = document.createElement("input");
    argumentInput.type = "text";
    argumentInput.id = "argument" + rowNum;
    argumentCell.appendChild(argumentInput);

    const emptyCell = document.createElement("td");

    newRow.appendChild(arrowCell);
    newRow.appendChild(numCell);
    newRow.appendChild(labelCell);
    newRow.appendChild(selectCell);
    newRow.appendChild(argumentCell);
    newRow.appendChild(emptyCell);

    tbody.appendChild(newRow);
    addBtnProgram();
    addArrowFunction();
}

function addRowMemory(){
    const memoryTable = document.getElementById("MemoryTable");
    const tbody = memoryTable.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    let rowNum = rows.length - 2;

    const newRow = document.createElement("tr");
    newRow.id = "memoryRow" + rowNum;

    const numCell = document.createElement("td");
    numCell.innerText = rowNum;

    const valueCell = document.createElement("td");
    const input = document.createElement("input");
    input.type = 'number';
    input.id = 'memory' + rowNum;
    valueCell.appendChild(input);

    const btnCell = document.createElement("td");

    newRow.appendChild(numCell);
    newRow.appendChild(valueCell);
    newRow.appendChild(btnCell);

    tbody.appendChild(newRow);
    addBtnMemory();
}

function runStep(){
    const row = document.getElementById(programCurrentRow);
    var instruction = row.cells[3].querySelector("select").value;

    const instructionFunction = Functions[instruction];
    if (instructionFunction) {
        instructionFunction();
    } else {
        console.error("Unknown instruction: " + instruction);
    }
}
function runAll() {
    const table = document.getElementById("ProgramTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 2; i < rows.length; i++) {
        const row = rows[i];
        const instructionSelect = row.cells[3].querySelector("select");
        if (!instructionSelect) continue;

        const instruction = instructionSelect.value.trim();
        const instructionFunction = Functions[instruction];
        if (instruction === "HALT") break;

        if (instructionFunction) {
            instructionFunction();
        }else{
            console.error("Unknown instruction: " + instruction + " at line " + (i - 2));
        }
    }
}
