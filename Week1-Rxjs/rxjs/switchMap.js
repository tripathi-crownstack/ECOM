var button=document.querySelector("#newButton");

var obs1=Rx.Observable.fromEvent(button,'click')

var obs2=Rx.Observable.interval(1000); 
// bad way
// reason two observables running at the same time 
// obs1.subscribe(
//     (event)=>obs2.subscribe(
//         (value)=>console.log(value)
//     ))

//will unsubscribe the first observable and switches to the latest one
obs1
.switchMap(event=>obs2)
.subscribe(value=>console.log(value))