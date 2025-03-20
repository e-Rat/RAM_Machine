document.addEventListener("DOMContentLoaded", addBtn);
document.addEventListener("DOMContentLoaded", addArrow);
document.addEventListener("DOMContentLoaded", addArrowFunction);

var currentRow = "row0";

function addBtn() {
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
        addBtn.addEventListener("click", addRow);
    }
}

function addArrow(){
    const row = document.getElementById(currentRow);
    row.cells[0].textContent = "⇒";
}

const progTable = document.getElementById("ProgramTable");

function changeCurrentRow(event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
        return;
    }

    const clickedRow = event.currentTarget;

    for (let i = 2; i < progTable.rows.length; i++) {
        let firstCell = progTable.rows[i].cells[0];
        if (firstCell) {
            firstCell.textContent = "";
        }
    }

    clickedRow.cells[0].textContent = "⇒";
    currentRow = clickedRow.id;
}

function addArrowFunction(){
    for(let i = 2; i < progTable.rows.length; i++){
        progTable.rows[i].addEventListener("click", (event) => changeCurrentRow(event));
    }
}

function addRow() {
    const programTable = document.getElementById("ProgramTable");
    const tbody = programTable.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");
    let rowNum = rows.length - 2;

    const newRow = document.createElement("tr");
    newRow.id = "row" + rowNum;

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
    newSelect.removeAttribute("id");
    selectCell.appendChild(newSelect);

    const argumentCell = document.createElement("td");
    const argumentInput = document.createElement("input");
    argumentInput.type = "text";
    argumentCell.appendChild(argumentInput);

    const emptyCell = document.createElement("td");

    newRow.appendChild(arrowCell);
    newRow.appendChild(numCell);
    newRow.appendChild(labelCell);
    newRow.appendChild(selectCell);
    newRow.appendChild(argumentCell);
    newRow.appendChild(emptyCell);

    tbody.appendChild(newRow);
    addBtn();
    addArrowFunction();
}

function runStep(){
    alert("Running step. Check console");
    const row = document.getElementById(currentRow);
    var label = row.cells[2].querySelector("input").value;
    var instruction = row.cells[3].querySelector("select").value;
    var argument = row.cells[4].querySelector("input").value;
    console.log(label + " " + instruction + " " + argument);
}