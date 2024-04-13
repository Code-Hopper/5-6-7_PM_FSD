// document.getElementById("f1").onsubmit = (event) => {
//     event.preventDefault() //it prevents submision of a HTML form
//     console.log(event)
// }

// document.getElementById("i1").onchange = (event) => {
//     // change will allways take place in input value
//     console.log(event)
//     console.log(event.target.name)
//     console.log(event.target.value)
// }

// document.getElementById("i1").onfocus = (event) => {
//     console.log("focus")
// }

// document.getElementById("i1").onblur = (event) => {
//     console.log("blur")
// }

// document.getElementById("c1").onchange = (event) => {
//     console.log(event.target.value)
//     document.getElementById("body").style.background = event.target.value
// }
// // https://www.javatpoint.com/javascript-events

// document.getElementById("body").onfocus = (event) =>{
//     document.title = "hello js"
// }

// document.getElementById("body").onblur = (event)=>{
//     document.title = "leaving to soon 😥 😥 😥 !"
// }

document.getElementById("i1").addEventListener("click",()=>{
alert("clicked !")
})