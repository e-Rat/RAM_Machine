function createMemoryRows() {
    const table = document.getElementById("MemoryTable");  

    
    for (let i = 0; i < 50; i++) {  
        const tr = document.createElement("tr");
        tr.id = `memoryRow${i}`;

        const td1 = document.createElement("td");
        td1.textContent = i; 

        const td2 = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";  
        td2.appendChild(input);  

        const td3 = document.createElement("td");  

        tr.appendChild(td1);  
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr); 
    }
}

 createMemoryRows();


function createProgramRows() {
    const table = document.getElementById("ProgramTable");  

    for (let i = 0; i < 50; i++) {
        const tr = document.createElement("tr");
        tr.id = `programRow${i}`;

        const td1 = document.createElement("td");

        const td2 = document.createElement("td");
        td2.textContent = i; 

        const td3 = document.createElement("td");
        const inputLabel = document.createElement("input");
        inputLabel.type = "text";  
        td3.appendChild(inputLabel);  

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
        // powyzszy kod nie jest optymalny, obciaza przegladarke przy wczytywaniu i analizowaniu kodu, 
        // optymalniej bedzie gdy zrobisz array z wszystkimi instrukcjami i z uzyciem petli for wygenerujesz
        //  wszystkie option dla kazdej z instrukcji
        td4.appendChild(selectInstruction);  

        const td5 = document.createElement("td");
        const inputArgument = document.createElement("input");
        inputArgument.type = "text";  
        td5.appendChild(inputArgument);  

        const td6 = document.createElement("td");

        tr.appendChild(td1);  
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        // zoptymalizuj kod, mozesz napisac to w petli

        table.appendChild(tr);  
    }
}


createProgramRows();


function extendOutputRow() {
    const headerRow = document.getElementById("headerRow");
    const outputRow = document.getElementById("outputTable");

    let currentId = 1;
    const inputsToAdd = 50; 

    for (let i = 0; i < inputsToAdd; i++) {
     
      const headerTd = document.createElement("td");
      headerTd.textContent = currentId; 
      headerRow.appendChild(headerTd);

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


  function extendInputRow() {
    const headerRow = document.getElementById("headerInRow");
    const outputRow = document.getElementById("inputTable");

    let currentId = 1;
    const inputsToAdd = 50; 

    for (let i = 0; i < inputsToAdd; i++) {
     
      const headerTd = document.createElement("td");
      headerTd.textContent = currentId; 
      headerRow.appendChild(headerTd);

      const td = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.id = `output${currentId}`;
      td.appendChild(input);
      outputRow.appendChild(td);

      currentId++;
    }
  }
  extendInputRow();

