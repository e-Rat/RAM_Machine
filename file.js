document.getElementById('fileInput').addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
    };

    reader.readAsText(file);
});

function exportProgram() {
    const table = document.getElementById("ProgramTable");
    let data = "";
    if(table.rows[2].cells[3].querySelector('select').value.trim() == ""){
        alert("Tabela jest pusta uzupejnij dane");
    }
    else{
        for (let i = 2; i < table.rows.length; i++) {
            const row = table.rows[i];
            const lineNumber = row.cells[1].innerText.trim();
            const label = row.cells[2].querySelector('input').value.trim();
            const instruction = row.cells[3].querySelector('select').value.trim();
            const argument = row.cells[4].querySelector('input').value.trim();
            if (instruction !== "") {
                const labelField = label === "" ? "_" : label;
                data += `${lineNumber} ${labelField} ${instruction} ${argument}\n`;
            }
            else {continue};
        }
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;

        const filename = prompt("Enter filename to save:", "program.txt");
        if (!filename) return;

        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}
function importProgram(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const content = e.target.result;
        const lines = content.split('\n').filter(line => line.trim() !== "");

        const table = document.getElementById("ProgramTable");
        let rowIndex = 2; 

        lines.forEach((line, index) => {
            const parts = line.split(' ').filter(part => part.trim() !== "");
            if (parts.length === 4) {
                const [lineNumber, label, instruction, argument] = parts;

                if (rowIndex < table.rows.length) {
                    const row = table.rows[rowIndex];

                    row.cells[1].innerText = lineNumber || '';   
                    row.cells[2].querySelector('input').value = label || '';  
                    row.cells[3].querySelector('select').value = instruction || '';  
                    row.cells[4].querySelector('input').value = argument || ''; 
                } else {
                    const newRow = table.insertRow(rowIndex);
                    newRow.insertCell(0).innerText = '';  
                    newRow.insertCell(1).innerText = lineNumber || '';  
                    newRow.insertCell(2).innerHTML = `<input type="text" value="${label || ''}">`;
                    newRow.insertCell(3).innerHTML = `<select><option value="${instruction || ''}" selected>${instruction || ''}</option></select>`; 
                    newRow.insertCell(4).innerHTML = `<input type="text" value="${argument || ''}">`; 
                }

                rowIndex++;
            }
        });

        alert("Import zakończony pomyślnie!");
    };

    reader.readAsText(file);
}

document.getElementById("fileInput").addEventListener("change", importProgram);


