document.addEventListener("DOMContentLoaded", createMemoryRows);
document.addEventListener("DOMContentLoaded", createProgramRows);
document.addEventListener("DOMContentLoaded", addBtnProgram);
document.addEventListener("DOMContentLoaded", addBtnMemory);
document.addEventListener("DOMContentLoaded", addArrow);
document.addEventListener("DOMContentLoaded", addArrowFunction);

var programCurrentRow = "programRow0";
var memoryCurrentRow = "memoryRow0";



function createMemoryRows(){
    const memoryTable = document.getElementById("MemoryTable");
    const tbody = memoryTable.querySelector("tbody");
    for(var i = 0; i<50; i++){
        const row = document.createElement("tr");
        row.id = "memoryRow" + (i+2);
        const index = document.createElement("td");
        index.textContent = i + 2;
        const td2 = document.createElement("td"); 
        const input = document.createElement("input");
        input.type = 'number';
        input.readOnly = true;
        input.id = "memory" + (i+2);
        td2.appendChild(input);

        const blank = document.createElement("td");

        tbody.appendChild(row);
        row.appendChild(index);
        row.appendChild(td2);
        row.appendChild(blank);
    }
}

function createProgramRows(){
    const programTable = document.getElementById("ProgramTable");
    const tbody = programTable.querySelector("tbody");
    for(var i = 0; i<50; i++){
        const row = document.createElement("tr");
        row.id = "programRow" + (i+2);

        const blank = document.createElement("td");

        const index = document.createElement("td");
        index.textContent = i + 2;

        const td2 = document.createElement("td");
        const inputLabel = document.createElement("input");
        inputLabel.type = 'text';
        inputLabel.id = 'label' + (i+2);
        td2.appendChild(inputLabel);
        
        const selectCell = document.createElement("td");
        const newSelect = document.getElementById("instruction0").cloneNode(true);
        newSelect.id = "instruction" + (i+2);
        selectCell.appendChild(newSelect);

        const td3 = document.createElement("td");
        const inputArgument = document.createElement("input");
        inputArgument.type = 'number';
        inputArgument.id = "argument" + (i+2);
        td3.appendChild(inputArgument);

        const blank2 = document.createElement("td");

        tbody.appendChild(row);
        row.appendChild(blank);
        row.appendChild(index)
        row.appendChild(td2);
        row.appendChild(selectCell);
        row.appendChild(td3);
        row.appendChild(blank2);
    }
}

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

    tbody.appendChild(newRow);  // Row added to tbody
    addBtnProgram();
    addArrowFunction();
}


function addRowMemory(){
    const memoryTable = document.getElementById("MemoryTable");
    let trElements = memoryTable.querySelectorAll("tr");
    let rowNum = trElements.length - 2;

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

    memoryTable.appendChild(newRow);
    addBtnMemory();
}

function runStep(){
    var row = document.getElementById(programCurrentRow);
    var instruction = row.cells[3].querySelector("select").value;

    const instructionFunction = Functions[instruction];
    if (instructionFunction) {
        instructionFunction();
    } else {
        console.error("Unknown instruction: " + instruction);
    }
}

function runAll(){
    const row = document.getElementById(programCurrentRow);
    var instruction = row.cells[3].querySelector("select").value;

    const instructionFunction = Functions[instruction];
    if (instructionFunction) {
        instructionFunction();
    } else {
        console.error("Unknown instruction: " + instruction);
    }
}

function resetProgram(){
    var programTable = document.getElementById("ProgramTable");
    var memoryTable = document.getElementById("MemoryTable");
    var inputTable = document.getElementById("InputTable");
    var outputTable = document.getElementById("OutputTable");

    for (let i = 2; i < programTable.rows.length; i++) {
        const row = programTable.rows[i];
        row.cells[2].querySelector('input').value = "";
        row.cells[3].querySelector('select').value = "STORE";
        row.cells[4].querySelector('input').value = "";
    }
    
    for (let i = 2; i < memoryTable.rows.length; i++) {
        const row = memoryTable.rows[i];
        row.cells[1].querySelector('input').value = "";
    }

    if (inputTable.rows.length > 2) {
        const inputRow = inputTable.rows[2];
        for (let i = 0; i < inputRow.cells.length; i++) {
            const input = inputRow.cells[i].querySelector('input');
            if (input) input.value = "";
        }
    }

    if (outputTable.rows.length > 2) {
        const inputRow = outputTable.rows[2];
        for (let i = 0; i < inputRow.cells.length; i++) {
            const input = inputRow.cells[i].querySelector('input');
            if (input) input.value = "";
        }
    }
}