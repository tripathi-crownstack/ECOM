var input1=document.querySelector('#input1')
var input2=document.querySelector('#input2')

var span=document.querySelector('span')
// individuals
// var obs1=Rx.Observable.fromEvent(input1,'input').subscribe((event)=>span.textContent=event.target.value)
// var obs2=Rx.Observable.fromEvent(input2,'input').subscribe((event)=>span.textContent=event.target.value)

var obs1=Rx.Observable.fromEvent(input1,'input')
var obs2=Rx.Observable.fromEvent(input2,'input')

// combined response

obs1.mergeMap(event1=>{
    return obs2.map(event2=>{
        return event1.target.value+" "+event2.target.value
    })
}).subscribe(
    combinedValue=>span.textContent=combinedValue // will print value if value received in second observable 
)
