function init() {
    var name = 'Dash'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  
function createCounter() {
    // creating a wrapping execution context
    // so we won't pollute the global environment
    let numOfExecutions = 0;

    // creating and returning an inner function
    // that closes over the lexical environment
    function counter() {
        let newScopeVaribale=100;
        numOfExecutions++;
        console.log(numOfExecutions);

        return function unknown(){
            const p="str"
            console.log(newScopeVaribale,p)
        }
    }

    return counter;
}
  
  const counter = createCounter();

  let newCounter=counter();
  newCounter()
 

