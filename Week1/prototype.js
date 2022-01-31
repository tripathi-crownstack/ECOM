let person = {
    name: "Rishabh Tripathi",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};


console.log(person.toString())
console.log(person.__proto__);
console.log(person.__proto__ === Object.prototype); 


let teacher = {
    teach: function (subject) {
        return "I can teach " + subject;
    }
};


// If you want the teacher object to access all methods and properties of the person object, 
//you can set the prototype of teacher object to the person object like this:

teacher.__proto__ = person;

console.log(teacher.name);
console.log(teacher.greet());

console.log(teacher)


let arr=[1,2,3,4,5,6];
let object={
    name:"Rishabh",
    city:"texas",
    display:function(){
        console.log("My name is ",this.name,"and i m from ",this.city )
    }
}

// console.log(object.__proto__) 
// console.log(arr.__proto__)
console.log(Array.prototype,"this is array of proto") // returns array __proto__
console.log(Object.prototype,"this is object of proto") // return object of __proto
console.log(Object.prototype.__proto__) // returns null

// Imp: since arr.__proto__ is of  array type then this means it also has some access to __proto__ ,like this

console.log(arr.__proto__) // returns array of proto array
console.log(arr.__proto__.__proto__) // returns an object of proto which is equal to Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // returns null

// how to add our own implementation

Array.prototype.printRishabh=function (){
    console.log("I m printing Rishabh five times")
   for (let i=0;i<5;i++) console.log("Rishabh") 
}
let rishabhArray=[]
rishabhArray.__proto__.printRishabh()
rishabhArray.printRishabh()



Object.prototype.printWhatEver=function (data){
    console.log(data)
}
let newObject={}
newObject.printWhatEver("This is just the Test")


Function.prototype.toString=function (){
    return "To String()"
}

function Test(){
}
let data=Test.toString()
console.log(data)





