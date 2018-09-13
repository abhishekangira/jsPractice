// Simple Closure

let passed = 3;
function addthem(inner) {
    console.log(inner + passed);
    debugger;
}
addthem(2);

// Standard (and slightly complex) Closure Example

function one() {
    let x = 2;
    function two(y) {
        debugger;
        return x + y;
    }
    return two;
}

let newFunc = one();
console.log(newFunc(2));