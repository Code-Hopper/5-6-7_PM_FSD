// setInterval(()=>{}) , setTtimeout(()=>{}) // this higher order methods/function

// let i = 1
// while (i <= 1000) {
//     console.log("hello , world !")
//     i++
// }

// 1000ms - 1s

// setInterval(()=>{
//     console.log("hello, world !")
// },50) 

// console.log("next line !")

// let fun1 = setInterval(() => {

//     let date = new Date()

//     document.getElementById("time").innerHTML = date.toLocaleTimeString()
//     // console.log(date.toLocaleTimeString() )

// }, 1000)

// setTimeout(() => {
//     // console.log("time out !")
//     clearInterval(fun1)
// }, 60000)



// setTimeout(()=>{
//     console.log("hi") //we have to hold this line uptill 2 sec
// },2000)

// let remaining_time = 10

// let reverseTime = setInterval(()=>{
//     document.getElementById("remaining_time").innerHTML = remaining_time + "s"
//     remaining_time -= 1
// },1000)

// setTimeout(()=>{
//     clearInterval(reverseTime)
// } , 11000)

// // let abc = {
// //     log: ()=>{console.log("hello")}
// // }

// abc.log()

// let element = document.getElementById("remaining_time")

// let time = 20

// let counter = setInterval(()=>{
//     element.innerHTML = `${time}s`
//     time--
// },1000)

// setTimeout(()=>{
//     clearInterval(counter)
// },21000)