var Functions = {
    LOAD: function() {
        console.log("LOAD");
    
        const memoryTable = document.getElementById("ProgramTable");
        const tbody = memoryTable.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");
    
        let rowNum = rows.length - 4;
        let argumentCell = document.getElementById("programRow" + rowNum);
        var inputs = argumentCell.querySelectorAll('input');
        
        var secondInput = inputs[1]; 
        let argument = document.getElementById("memoryRow" + secondInput.value);

        const argumentInput = argument.querySelector("input");
 
    
        const input = document.getElementById("input1");
            
        argumentInput.value = input.value;
    },
    
    STORE: function() {
        console.log("STORE");
    },
    READ: function() {
        console.log("READ");
    },
    WRITE: function() {
        var programRow = document.getElementById(programCurrentRow);
        var argument = programRow.cells[4].querySelector("input").value;
        console.log(argument);

        var memoryRow = document.getElementById("memoryRow" + argument);
        var memoryValue = memoryRow.cells[1].querySelector("input").value;
        //var output = document.getElementById("output1");
        //output.value = memoryValue;
        animateInputToMemory(memoryRow.id, memoryValue, "output1");
    },
    ADD: function() {
        console.log("ADD");
    },
    SUB: function() {
        console.log("SUB");
    },
    MULT: function() {
        console.log("MULT");
    },
    DIV: function() {
        console.log("DIV");
    },
    JUMP: function() {
        console.log("JUMP");
    },
    JZERO: function() {
        console.log("JZERO");
    },
    JGTZ: function() {
        console.log("JGTZ");
    },
    HALT: function() {
        console.log("HALT");
    }
};