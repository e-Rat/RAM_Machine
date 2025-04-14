var Functions = {
    LOAD: function() {
        console.log("LOAD");
        const memoryTable = document.getElementById("MemoryTable");
        const tbody = memoryTable.querySelector("tbody");
        const rows = tbody.querySelectorAll("tr");
        let rowNum = rows.length - 3;
        console.log(rowNum);
        let label = document.getElementById("programRow" + rowNum);
        
        if (label) {
            const inputs = Array.from(label.querySelectorAll("input"));
    
            inputs.forEach(input => {
                console.log(input.value);
            });
        } else {
            console.log("Brak wiersza o id 'programRow" + rowNum + "'");
        }
        
                
    },
    STORE: function() {
        console.log("STORE");
    },
    READ: function() {
        console.log("READ");
    },
    WRITE: function() {
        console.log("WRITE");
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