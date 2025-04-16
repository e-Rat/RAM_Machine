function createMemoryRows() {
    const table = document.getElementById("MemoryTable");  // Uzyskujemy dostęp do tabeli

    // Pętla do tworzenia 50 nowych wierszy
    for (let i = 0; i < 50; i++) {  // Zaczynamy od 2, ponieważ wiersze 0 i 1 już istnieją w HTML
        const tr = document.createElement("tr");
        tr.id = `memoryRow${i}`;

        const td1 = document.createElement("td");
        td1.textContent = i;  // Numer wiersza

        const td2 = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";  // Tworzymy input typu number
        td2.appendChild(input);  // Dodajemy input do komórki td

        const td3 = document.createElement("td");  // Pusta komórka

        tr.appendChild(td1);  // Dodajemy komórki do wiersza
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr);  // Dodajemy wiersz do tabeli
    }
}

// Wywołanie funkcji po załadowaniu strony
 createMemoryRows();


function createProgramRows() {
    const table = document.getElementById("ProgramTable");  // Odwołanie do tabeli

    // Pętla do tworzenia 50 nowych wierszy (zaczynamy od 2, bo wiersze 0 i 1 już istnieją)
    for (let i = 0; i < 50; i++) {
        const tr = document.createElement("tr");
        tr.id = `programRow${i}`;

        const td1 = document.createElement("td");

        const td2 = document.createElement("td");
        td2.textContent = i;  // Numer wiersza

        const td3 = document.createElement("td");
        const inputLabel = document.createElement("input");
        inputLabel.type = "text";  // Tworzymy input typu text
        td3.appendChild(inputLabel);  // Dodajemy input do komórki td

        const td4 = document.createElement("td");
        const selectInstruction = document.createElement("select");
        selectInstruction.innerHTML = `
            <option value="STORE">STORE</option>
            <option value="LOAD">LOAD</option>
            <option value="READ">READ</option>
            <option value="WRITE">WRITE</option>
            <option value="ADD">ADD</option>
            <option value="SUB">SUB</option>
            <option value="MULT">MULT</option>
            <option value="DIV">DIV</option>
            <option value="JUMP">JUMP</option>
            <option value="JZERO">JZERO</option>
            <option value="JGTZ">JGTZ</option>
            <option value="HALT">HALT</option>
        `;
        td4.appendChild(selectInstruction);  // Dodajemy select do komórki td

        const td5 = document.createElement("td");
        const inputArgument = document.createElement("input");
        inputArgument.type = "text";  // Tworzymy input typu text
        td5.appendChild(inputArgument);  // Dodajemy input do komórki td

        const td6 = document.createElement("td");

        tr.appendChild(td1);  // Dodajemy komórki do wiersza
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        table.appendChild(tr);  // Dodajemy wiersz do tabeli
    }
}

// Wywołanie funkcji po załadowaniu strony
createProgramRows();


function extendOutputRow() {
    const headerRow = document.getElementById("headerRow");
    const outputRow = document.getElementById("outputTable");

    let currentId = 1;
    const inputsToAdd = 50; // ile dodatkowych inputów chcesz dodać

    for (let i = 0; i < inputsToAdd; i++) {
      // Dodajemy komórki nagłówka (pierwszy wiersz)
      const headerTd = document.createElement("td");
      headerTd.textContent = currentId; // Numer w nagłówku
      headerRow.appendChild(headerTd);

      // Dodajemy inputy w drugim wierszu
      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.id = `output${currentId}`;
      td.appendChild(input);
      outputRow.appendChild(td);

      currentId++;
    }
  }
  extendOutputRow();

