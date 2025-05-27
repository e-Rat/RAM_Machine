var Functions = {
    LOAD: function() { //Bartek
        console.log("LOAD");
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
    
        Animation(memoryInput.id, memoryValue, akumulatorInput.id);
    
        setTimeout(() => {
            akumulatorInput.value = memoryValue;
        }, 1800);
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
        var instruction = programRow.cells[3].querySelector("select");
        var instructionValue = instruction.value;
        var argument = programRow.cells[4].querySelector("input");
        var argumentValue = argument.value;

        var instructionProcessor = document.getElementById("Instruction");
        var argumentProcessor = document.getElementById("Argument");
        Animation(instruction.id, instructionValue, instructionProcessor.id);
        Animation(argument.id, argumentValue, argumentProcessor.id);

        const indexInputCurrentRow = parseInt(inputCurrentRow[inputCurrentRow.length - 1]);

        const input = document.getElementById("input" + indexInputCurrentRow);
        const memoryInput = document.getElementById("memory" + argumentValue);

        if (!input) {
            console.error("Input element not found:", inputCurrentRow);
            return;
        }
        if (!memoryInput) {
            console.error("Memory input element not found: memory" + argumentValue);
            return;
        }

        Animation(input.id, input.value, memoryInput.id);

        setTimeout(() => {
            memoryInput.value = input.value;

            var indexInputCurrArrowRow = parseInt(inputCurrentRow.replace(/\D/g, ''), 10);
            document.getElementById(inputCurrentRow).textContent = "";
            indexInputCurrArrowRow++;
            inputCurrentRow = "inputArrow" + indexInputCurrArrowRow;
            addInputANDOutputArrow();
        }, 1800);
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

        var indexOutputCurrArrowRow = parseInt(outputCurrentRow[outputCurrentRow.length -1]);
        document.getElementById(outputCurrentRow).textContent = "";
        console.log(indexOutputCurrArrowRow);
        indexOutputCurrArrowRow++;
        outputCurrentRow = "outputArrow" + indexOutputCurrArrowRow;
        addInputANDOutputArrow();
        
        Animation(memoryInput.id, memoryValue, "output1");
    },
    
    ADD: function() { //Bartek
        console.log("ADD");
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
        var memoryValue = parseInt(memoryInput.value);
        var akumulatorInput = document.getElementById("memory0");
        var result = Math.floor(parseInt(akumulatorInput.value) + memoryValue);
        console.log(result)
        Animation(memoryInput.id, memoryValue, akumulatorInput.id)

        setTimeout(() => {
           akumulatorInput.value = result;
        }, 1800);
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
        var result = Math.floor(parseInt(akumulatorInput.value) - memoryValue);
        //DO eryka zobacz jak zrobilem add i zrob tak samo bo odejmuje ci to jako stringa
        Animation(memoryInput.id, memoryValue, akumulatorInput.id)
        
        setTimeout(() => {
            akumulatorInput.value = result;
        }, 1800);
    },
    MULT: function() { //Bartek
        console.log("MULT");
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
        var result = Math.floor(parseInt(akumulatorInput.value) * memoryValue);
        console.log(result)

        Animation(memoryInput.id, memoryValue, akumulatorInput.id);

        setTimeout(() => {
            akumulatorInput.value = result;
        }, 1800);
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
        var result = Math.floor(parseInt(akumulatorInput.value) / memoryValue);

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
        var programRow = document.getElementById(programCurrentRow);
        var instruction = programRow.cells[3].querySelector("select");
        var instructionValue = instruction.value;
        var argument = programRow.cells[4].querySelector("input");
        var argumentValue = argument.value;
        console.log(argumentValue);
        var akumulatorValue = document.getElementById("memory0").value;

        var instructionProcessor = document.getElementById("Instruction");
        var argumentProcessor = document.getElementById("Argument");
        Animation(instruction.id, instructionValue, instructionProcessor.id);
        Animation(argument.id, argumentValue, argumentProcessor.id);

        if(akumulatorValue == 0){
            setTimeout(() => {
                var label = checkLabels(argumentValue);
                console.log(label);
                var programIndex = programCurrentRow[programCurrentRow.length - 1];
                const programArrow = document.getElementById("programArrow" + programIndex);
                programArrow.textContent = "";
                programCurrentRow = "programRow" + label[label.length - 1];
            }, 1800);
            
        }
    },
    JGTZ: function() { //Eryk
        console.log("JGTZ");
    },
    HALT: function() { //Bartek
        console.log("HALT");
    }
};