
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Ayush'; // undefined
    let age = 21; // refference error
  }
  
//   sayHi();

// Temporal Dead zone

//  Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized.
// They are not accessible before the line we declare (initialize) them. 


function getAge() {
    // 'use strict'; // does not allows to declare global variables accidenntally
    age = 21;
    console.log(typeof a)
    console.log(age)
  }
  
  getAge();