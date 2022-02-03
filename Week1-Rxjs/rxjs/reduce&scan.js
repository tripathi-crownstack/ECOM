var input=document.querySelector('input')
var Observable=Rx.Observable.of(1,2,3,4,5)

// returns value at the last
Observable
.reduce((items,item)=>items+item,0)
.subscribe({
    next:function(value){
        console.log(value)
    }
})

// prints value at each time 
Observable
.scan((items,item)=>items+item,0)
.subscribe({
    next:function(value){
        console.log(value)
    }
})