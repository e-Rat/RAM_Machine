document.addEventListener("DOMContentLoaded", () => {
    createMemoryRows();
    createProgramRows();
    createInputRows();
    createOutputRows();
    addBtnProgram();
    addBtnMemory();
    addArrow();
    addArrowFunction();
    addInputANDOutputArrow();
    addInputArrowFunction();
    addOutputArrowFunction();
});


var programCurrentRow = "programRow0";
var memoryCurrentRow = "memoryRow0";
var inputCurrentRow = "inputArrow1";
var outputCurrentRow = "outputArrow1";


function createMemoryRows(){
    const memoryTable = document.getElementById("MemoryTable");
    const tbody = memoryTable.querySelector("tbody");
    for(var i = 0; i<49; i++){
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
    for(var i = 0; i<49; i++){
        const row = document.createElement("tr");
        row.id = "programRow" + (i+2);

        const blank = document.createElement("td");
        blank.id = "programArrow" + (i+2);

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
        inputArgument.type = 'text';
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

function createInputRows(){
    const numRow = document.getElementById("inputNumRow");
    const inputRow = document.getElementById("inputInputRow");
    const arrowRow = document.getElementById("inputArrowRow");

    for(var i = 4; i <51;i++){
        const numTd = document.createElement("td");
        numTd.textContent = i;
        numRow.appendChild(numTd);
    }
    for (var i = 4; i < 51; i++) {
        const inputTd = document.createElement("td");
        var input = document.createElement('input');
        input.type = 'number';
        input.id = `input${i}`;
        inputTd.appendChild(input);
        inputRow.appendChild(inputTd);
    }
    for(var i = 4;i<51;i++){
        const arrowsTd = document.createElement("td");
        arrowsTd.id = `inputArrow${i}`;
        arrowRow.appendChild(arrowsTd);
    }
}

function createOutputRows(){
    const numRow = document.getElementById("outputNumRow");
    const inputRow = document.getElementById("outputInputRow");
    const arrowRow = document.getElementById("outputArrowRow");

    for(var i = 4; i <51;i++){
        const numTd = document.createElement("td");
        numTd.textContent = i;
        numRow.appendChild(numTd);
    }
    for (var i = 4; i < 51; i++) {
        const inputTd = document.createElement("td");
        var input = document.createElement('input');
        input.type = 'number';
        input.id = `output${i}`;
        inputTd.appendChild(input);
        inputRow.appendChild(inputTd);
    }
    for(var i = 4;i<51;i++){
        const arrowsTd = document.createElement("td");
        arrowRow.appendChild(arrowsTd);
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
    row.scrollIntoView({behavior:"smooth",block:"center"});
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
    newRow.scrollIntoView({ behavior: "smooth", block: "center" });
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
    newRow.scrollIntoView({ behavior: "smooth", block: "center" });
}

function addInputANDOutputArrow(){
    var inputTableCurrentRow = document.getElementById(inputCurrentRow);
    var outputTableCurrentRow = document.getElementById(outputCurrentRow);

    console.log(inputCurrentRow + " " + outputCurrentRow);

    inputTableCurrentRow.textContent = "⇧";
    outputTableCurrentRow.textContent = "⇧";
}

// --- New functions for input and output arrow selection ---
function changeInputRow(event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
        return;
    }
    const clickedCell = event.currentTarget;
    const arrowRow = document.getElementById("inputArrowRow");
    for (let i = 0; i < arrowRow.cells.length; i++) {
        arrowRow.cells[i].textContent = "";
    }
    clickedCell.textContent = "⇧";
    inputCurrentRow = clickedCell.id;
    console.log("inputCurrentRow:", inputCurrentRow);
}

function addInputArrowFunction() {
    const arrowRow = document.getElementById("inputArrowRow");
    for (let i = 0; i < arrowRow.cells.length; i++) {
        arrowRow.cells[i].addEventListener("click", changeInputRow);
    }
}

function changeOutputRow(event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
        return;
    }
    const clickedCell = event.currentTarget;
    const arrowRow = document.getElementById("outputArrowRow");
    for (let i = 0; i < arrowRow.cells.length; i++) {
        arrowRow.cells[i].textContent = "";
    }
    clickedCell.textContent = "⇧";
    outputCurrentRow = clickedCell.id;
    console.log("outputCurrentRow:", outputCurrentRow);
}

function addOutputArrowFunction() {
    const arrowRow = document.getElementById("outputArrowRow");
    for (let i = 0; i < arrowRow.cells.length; i++) {
        arrowRow.cells[i].addEventListener("click", changeOutputRow);
    }
}
function runStep(){
    return new Promise((resolve) => {  
        var row = document.getElementById(programCurrentRow);
        var instruction = row.cells[3].querySelector("select").value;

        const instructionFunction = Functions[instruction];
        if (instructionFunction) {
            instructionFunction();
            if(instruction !== "JUMP" && instruction !== "JZERO" && instruction !== "JGTZ"){
                setTimeout(() => {
                    var indexProgramCurrArrowRow = parseInt(programCurrentRow.replace(/\D/g, ''));
                    var arrowRow = document.getElementById("programArrow" + indexProgramCurrArrowRow);
                    console.log("programArrow" + indexProgramCurrArrowRow);
                    arrowRow.textContent = "";
                    indexProgramCurrArrowRow++;
                    programCurrentRow = "programRow" + indexProgramCurrArrowRow;

                    addArrow();
                    resolve();
                    }
                , 1800);
            }
            else{
                setTimeout(() => {
                    addArrow();
                    resolve();
                    }
                , 1800);
            }
        } else {
            console.error("Unknown instruction: " + instruction);
            resolve();  
        }
    });
}
async function runAll() {
    const table = document.getElementById("ProgramTable");
    const rows = table.querySelectorAll("tr");

    while (true) {
        const index = parseInt(programCurrentRow.replace(/\D/g, ''));
        const row = document.getElementById("programRow" + index);
        const instructionSelect = row?.cells[3]?.querySelector("select");

        if (!instructionSelect) break;

        const instruction = instructionSelect.value.trim();

        if (instruction === "HALT" || instruction === "") {
            console.log("Execution halted at row " + index);
            break;
        }

        await runStep();
    }
}
function checkLabels(label){
    const inputs = programTable.querySelectorAll("input");
    for(var i  = 0; i< inputs.length; i += 2){
        console.log(inputs[i].id);
        if(inputs[i].value === label) return inputs[i].id;
    }
    alert("Brak label o takiej zawartosci");
    return "";
}

function resetProgram(){
    var programTable = document.getElementById("ProgramTable");
    var memoryTable = document.getElementById("MemoryTable");
    var inputTable = document.getElementById("InputTable");
    var outputTable = document.getElementById("OutputTable");

    for (let i = 2; i < programTable.rows.length; i++) {
        const row = programTable.rows[i];
        row.cells[2].querySelector('input').value = "";
        row.cells[3].querySelector('select').value = "";
        row.cells[4].querySelector('input').value = "";
    }
    
    for (let i = 2; i < memoryTable.rows.length; i++) {
        const row = memoryTable.rows[i];
        row.cells[1].querySelector('input').value = "";
    }

    if (inputTable.rows.length > 2) {
        const inputRow = inputTable.rows[1];
        for (let i = 0; i < inputRow.cells.length; i++) {
            const input = inputRow.cells[i].querySelector('input');
            if (input) input.value = "";
        }
    }

    if (outputTable.rows.length > 2) {
        const inputRow = outputTable.rows[1];
        for (let i = 0; i < inputRow.cells.length; i++) {
            const input = inputRow.cells[i].querySelector('input');
            if (input) input.value = "";
        }
    }
}
