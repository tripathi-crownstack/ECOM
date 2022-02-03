var subject=new Rx.Subject()

subject.subscribe({
    next:function(value){
        console.log(value)
    },
    error:function (error){
        console.log(error)
    },
    complete:function (){
        console.log("Complete")
    }
})


subject.subscribe({
    next:function(value){
        console.log(value)
    }
})

subject.next("This is just the beginning.")
subject.complete()


// Subjects don't have initial value ,we can use behaviour subject to pass the initial vaue

var behaviuorsubject=new Rx.BehaviorSubject("Not clicked");
behaviuorsubject.subscribe({
    next:function(value){
        console.log(value)
    }
})
