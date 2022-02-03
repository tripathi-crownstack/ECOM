var button=document.querySelector('button');

// button.addEventListener('click',()=>{
//     console.log("Rishabhb")
// })

Rx.Observable.fromEvent(button,'click')
    .throttleTime(1000) // emit value every 1 second
    .subscribe(event =>{
        console.log("Clicked",event.clientX) // emit the first value, then ignore for 5 seconds. repeat...
    })


 // better approach
 
 Rx.Observable.fromEvent(button,'click')
    .throttleTime(1000)
    .map(data=>{return data.clientX}) 
    .subscribe(
        (coordinate) =>console.log("Clicked",coordinate)
    );