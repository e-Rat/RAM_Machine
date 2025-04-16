var Functions = {
    LOAD: function() { //Bartek
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
    STORE: function() { //Eryk
        console.log("STORE");
        var akumulatorRow = document.getElementById("memoryRow0");
        var akumulatorInput = akumulatorRow.cells[1].querySelector("input");
        var akumulatorValue = akumulatorInput.value;
        if(!akumulatorValue) {
            alert("Wartosc musi byc ustalona");
            return;
        }
        else{
            var programRow = document.getElementById(programCurrentRow);
            var instruction = programRow.cells[3].querySelector("select");
            var instructionValue = instruction.value;
            var argument = programRow.cells[4].querySelector("input");
            var argumetnValue = argument.value;
    
            var instructionProcessor = document.getElementById("Instruction");
            var argumentProcessor = document.getElementById("Argument");
            Animation(instruction.id, instructionValue, instructionProcessor.id);
            Animation(argument.id, argumetnValue, argumentProcessor.id);
    
            var memoryInput = document.getElementById("memory" + argumetnValue);

            Animation(akumulatorInput.id, akumulatorValue, memoryInput.id);
        }
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
    WRITE: function() { //Eryk
        var programRow = document.getElementById(programCurrentRow);
        var instruction = programRow.cells[3].querySelector("select");
        var instructionValue = instruction.value;
        var argument = programRow.cells[4].querySelector("input");
        var argumentValue = argument.value;

        var instructionProcessor = document.getElementById("Instruction");
        var argumentProcessor = document.getElementById("Argument");
        Animation(instruction.id, instructionValue, instructionProcessor.id);
        Animation(argument.id, argumentValue, argumentProcessor.id);

        var memoryInput = document.getElementById("memory" + argumentValue);
        var memoryValue = memoryInput.value;
        
        Animation(memoryInput.id, memoryValue, "output1");
    },
    ADD: function() { //Bartek
        console.log("ADD");
    },
    SUB: function() { //Eryk
        console.log("SUB");
        var programRow = document.getElementById(programCurrentRow);
        var instruction = programRow.cells[3].querySelector("select");
        var instructionValue = instruction.value;
        var argument = programRow.cells[4].querySelector("input");
        var argumentValue = argument.value;

        var instructionProcessor = document.getElementById("Instruction");
        var argumentProcessor = document.getElementById("Argument");
        Animation(instruction.id, instructionValue, instructionProcessor.id);
        Animation(argument.id, argumentValue, argumentProcessor.id);

        var memoryInput = document.getElementById("memory" + argumentValue);
        var memoryValue = memoryInput.value;
        var akumulatorInput = document.getElementById("memory0");
        var result = Math.floor(akumulatorInput.value - memoryValue);

        Animation(memoryInput.id, memoryValue, akumulatorInput.id)
        
        setTimeout(() => {
            akumulatorInput.value = result;
        }, 1800);
    },
    MULT: function() { //Bartek
        console.log("MULT");
    },
    DIV: function() { //Eryk
        console.log("DIV");
        var programRow = document.getElementById(programCurrentRow);
        var instruction = programRow.cells[3].querySelector("select");
        var instructionValue = instruction.value;
        var argument = programRow.cells[4].querySelector("input");
        var argumentValue = argument.value;

        var instructionProcessor = document.getElementById("Instruction");
        var argumentProcessor = document.getElementById("Argument");
        Animation(instruction.id, instructionValue, instructionProcessor.id);
        Animation(argument.id, argumentValue, argumentProcessor.id);

        var memoryInput = document.getElementById("memory" + argumentValue);
        var memoryValue = memoryInput.value;
        var akumulatorInput = document.getElementById("memory0");
        var result = Math.floor(akumulatorInput.value / memoryValue);

        Animation(memoryInput.id, memoryValue, akumulatorInput.id)
        
        setTimeout(() => {
            akumulatorInput.value = result;
        }, 1800);
    },
    JUMP: function() { //Bartek
        console.log("JUMP");
    },
    JZERO: function() { //Eryk
        console.log("JZERO");
    },
    JGTZ: function() { //Eryk
        console.log("JGTZ");
    },
    HALT: function() { //Bartek
        console.log("HALT");
    }
};