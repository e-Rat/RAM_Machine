
var Functions = {
    LOAD: function() {
        console.log("LOAD");
        var programRow = document.getElementById(programCurrentRow);
        var argument = programRow.cells[4].querySelector("input").value;
        let argument1 = document.getElementById("memoryRow" + argument);

        const argumentInput = argument1.querySelector("input");
        let memoryTable1 = document.getElementById("MemoryTable");
        const rows1 = memoryTable1.querySelectorAll("input");

        const argument0 = rows1[0];
        argument0.value = argumentInput.value;
    },
    STORE: function() {
        console.log("STORE");
    },
    READ: function() {
        console.log("READ");
        var programRow = document.getElementById(programCurrentRow);
        var argument = programRow.cells[4].querySelector("input").value;
        let argument1 = document.getElementById("memoryRow" + argument);

        const argumentInput = argument1.querySelector("input");
        const input = document.getElementById("input1");
            
        argumentInput.value = input.value;
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