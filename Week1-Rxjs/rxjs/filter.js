var observable=Rx.Observable.interval(100)

observable
.filter(function(value){
    return value%2==0
},)
.subscribe({
    next:function(value){
        console.log(value)
    },
    error:function(error){
        console.log(error)
     },
    complete:function(){} 
})