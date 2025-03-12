window.onload = addRow();
function addRow(){
    const ProgramTable = document.getElementById("ProgramTable");
    const rows = ProgramTable.querySelectorAll("tr");
    let lastElement = rows[rows.length-1];
    const addButton = document.createElement("button");
    addButton.textContent="dodaj element";
    lastElement.appendChild(addButton)
}