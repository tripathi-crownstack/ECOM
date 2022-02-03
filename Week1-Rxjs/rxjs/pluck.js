// could be used as an alternate of map 

var input=document.querySelector('input')
var Observable=Rx.Observable.fromEvent(input ,'input')

// with map

// Observable
//     .map(event=>event.target.value)
//     .debounceTime(1000)
//     .distinctUntilChanged()
//     .subscribe({
//         next:function(value) {
//             console.log(value)
//         }
//     })

// with Pluck

Observable
    .pluck('target','value') // need to pass a string,this string will consider as object property
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe({
        next:function(value) {
            console.log(value)
        }
    })