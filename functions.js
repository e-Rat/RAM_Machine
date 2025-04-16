var Functions = {
    LOAD: function() { //Bartek
        console.log("LOAD");
    },
    STORE: function() { //Eryk
        console.log("STORE");
        var akumulatorRow = document.getElementById("memoryRow0");
        var akumulatorValue = akumulatorRow.cells[1].querySelector("input").value;

        var programRow = document.getElementById(programCurrentRow);
        var argument = programRow.cells[4].querySelector("input").value;

        var memoryRow = document.getElementById("memoryRow" + argument);
        memoryRow.cells[1].querySelector("input").value = akumulatorValue;
    },
    READ: function() { //Bartek

    },
    WRITE: function() { //Eryk
        var programRow = document.getElementById(programCurrentRow);
        var argument = programRow.cells[4].querySelector("input").value;
        console.log(argument);

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
    },
    MULT: function() { //Bartek
        console.log("MULT");
    },
    DIV: function() { //Eryk
        console.log("DIV");
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