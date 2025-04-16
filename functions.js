var Functions = {
    LOAD: function() { //Bartek
        console.log("LOAD");
    },
    STORE: function() { //Eryk
        console.log("STORE");
        var akumulatorRow = document.getElementById("memoryRow0");
        var akumulatorValue = akumulatorRow.cells[1].querySelector("input").value;
        if(!akumulatorValue) {
            alert("Wartosc musi byc ustalona");
            return;
        }
        else{
            var programRow = document.getElementById(programCurrentRow);
            var instrucion = programRow.cells[3].querySelector("select").value;
            var argument = programRow.cells[4].querySelector("input").value;
    
            document.getElementById("Instruction").value = instrucion;
            document.getElementById("Argument").value = argument;
    
            var memoryRow = document.getElementById("memoryRow" + argument);
            memoryRow.cells[1].querySelector("input").value = akumulatorValue;
        }
    },
    READ: function() { //Bartek

    },
    WRITE: function() { //Eryk
        var programRow = document.getElementById(programCurrentRow);
        var instrucion = programRow.cells[3].querySelector("select").value;
        var argument = programRow.cells[4].querySelector("input").value;
        console.log(argument);

        document.getElementById("Instruction").value = instrucion;
        document.getElementById("Argument").value = argument;

        var memoryRow = document.getElementById("memoryRow" + argument);
        var memoryValue = memoryRow.cells[1].querySelector("input").value;

        var output = document.getElementById("output1");
        output.value = memoryValue;
    },
    ADD: function() { //Bartek
        console.log("ADD");
    },
    SUB: function() { //Eryk
        console.log("SUB");
        var programRow = document.getElementById(programCurrentRow);
        var instrucion = programRow.cells[3].querySelector("select").value;
        var argument = programRow.cells[4].querySelector("input").value;
        console.log(argument);

        document.getElementById("Instruction").value = instrucion;
        document.getElementById("Argument").value = argument;

        var memoryRow = document.getElementById("memoryRow" + argument);
        var memoryValue = memoryRow.cells[1].querySelector("input").value;

        var akumulatorRow = document.getElementById("memoryRow0");
        akumulatorRow.cells[1].querySelector("input").value -= memoryValue;
    },
    MULT: function() { //Bartek
        console.log("MULT");
    },
    DIV: function() { //Eryk
        console.log("DIV");
        var programRow = document.getElementById(programCurrentRow);
        var instrucion = programRow.cells[3].querySelector("select").value;
        var argument = programRow.cells[4].querySelector("input").value;
        console.log(argument);

        document.getElementById("Instruction").value = instrucion;
        document.getElementById("Argument").value = argument;

        var memoryRow = document.getElementById("memoryRow" + argument);
        var memoryValue = memoryRow.cells[1].querySelector("input").value;

        var akumulatorRow = document.getElementById("memoryRow0");
        akumulatorRow.cells[1].querySelector("input").value /= memoryValue;
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