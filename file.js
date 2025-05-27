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