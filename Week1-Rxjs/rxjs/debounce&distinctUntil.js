var input=document.querySelector('input')
var Observable=Rx.Observable.fromEvent(input ,'input')

// Observable
//     .debounceTime(1000) // value emits after 1s if othing happens.It does not ignore the inbetween  events.
//     .distinctUntilChanged()// should be placed after debounceTime,but not work in this case,because we getting event which is changed each time.
//     .subscribe({
//         next:function(event) {
//             console.log(event.target.value)
//         }
//     })


// better way    
// should use map ,to get the exact value
Observable
    .map(event=>event.target.value)
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe({
        next:function(value) {
            console.log(value)
        }
    })
