// Variables
let variableName; // Declare a variable
const CONSTANT_NAME = "value"; // Constant value

// Functions
function exampleFunction(param1, param2) {
    // Logic goes here
}

// Arrow Functions
const arrowFunction = (param1, param2) => {
    // Logic goes here
};

// Control Flow
if (true) {
    // If block
} else {
    // Else block
}

// Loops
for (let i = 0; i < 10; i++) {
    // Loop logic
}

// Classes
class ExampleClass {
    constructor(param) {
        this.param = param;
    }

    methodName() {
        // Method logic
    }
}

// Modules (Export/Import)
export function exportedFunction() {
    // Logic goes here
}

// Async/Await Example
async function asyncFunction() {
    try {
        const result = await fetch('https://api.example.com/data');
        const data = await result.json();
        // Logic with data
    } catch (error) {
        console.error(error);
    }
}