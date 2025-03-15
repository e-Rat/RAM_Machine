document.addEventListener("DOMContentLoaded", addBtn);

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

function addRow() {
    const programTable = document.getElementById("ProgramTable");
    const rows = programTable.querySelectorAll("tr");
    let rowNum = rows.length - 2;

    const newRow = document.createElement("tr");
    const numCell = document.createElement("td");
    numCell.textContent = rowNum + 1;

    const labelCell = document.createElement("td");
    const labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.id = `label${rowNum + 1}`;
    labelCell.appendChild(labelInput);

    const selectCell = document.createElement("td");
    const newSelect = document.getElementById("instruction0").cloneNode(true);
    newSelect.id = `instruction${rowNum + 1}`;
    selectCell.appendChild(newSelect);

    const argumentCell = document.createElement("td");
    const argumentInput = document.createElement("input");
    argumentInput.type = "text";
    argumentInput.id = `argument${rowNum + 1}`;
    argumentCell.appendChild(argumentInput);

    const emptyCell = document.createElement("td");

    newRow.appendChild(numCell);
    newRow.appendChild(labelCell);
    newRow.appendChild(selectCell);
    newRow.appendChild(argumentCell);
    newRow.appendChild(emptyCell);

    programTable.appendChild(newRow);
    addBtn();
}