// Hoisting refers to the process whereby the interpreter appears to move the declaration of functions,
//  variables or classes to the top of their scope, prior to execution of the code.
// this var will hold the latest value
console.log(a)

var a=10;

{
   var a=20;
}

function Test(a){

    const test=()=>{
        console.log(p)
        console.log(x)
    }
    let p=101;
    var x=100;
    test()
}

Test(a)
console.log("a1",a)

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.


console.log(this)

function None() {
    let a=100
    console.log(this,a)
} 
None()

// console.log(b) // referece error
// b=100

// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. 
//An exception will be thrown if a variable declared with let or const is read before it is initialized.


// classes must be defined before they can be constructed
const p = new Rectangle(); // ReferenceError

class Rectangle {}

function rest(){
    num=100;
}

console.log(num)



function test(){

    var name="shiv"

    var user=()=>{
        console.log(name)
    }
}


var name1=()=>{
    console.log("hello")
}

