// // document.getElementById("f1").onsubmit = (event) => {
// //     event.preventDefault() //it prevents submision of a HTML form
// //     console.log(event)
// // }

// // document.getElementById("i1").onchange = (event) => {
// //     // change will allways take place in input value
// //     console.log(event)
// //     console.log(event.target.name)
// //     console.log(event.target.value)
// // }

// // document.getElementById("i1").onfocus = (event) => {
// //     console.log("focus")
// // }

// // document.getElementById("i1").onblur = (event) => {
// //     console.log("blur")
// // }

// // document.getElementById("c1").onchange = (event) => {
// //     console.log(event.target.value)
// //     document.getElementById("body").style.background = event.target.value
// // }
// // // https://www.javatpoint.com/javascript-events

// // document.getElementById("body").onfocus = (event) =>{
// //     document.title = "hello js"
// // }

// // document.getElementById("body").onblur = (event)=>{
// //     document.title = "leaving to soon 😥 😥 😥 !"
// // }

// document.getElementById("i1").addEventListener("click",()=>{
//     alert("clicked !")
// })

// document.addEventListener("keypress",(event)=>{
//     console.log("keypressed !")
//     console.log(event)
// })

// window.addEventListener("load",()=>{
//     console.log("load event !")
// })

// window.addEventListener("unload",()=>{
//     // event.preventDefault()
//     console.log("unload event !")
// })

// window.addEventListener("resize",()=>{
//     console.log("resize event has been triggred !")
// })

// window.addEventListener("focus",(event)=>{
//     console.log("this page is now focused !")
// })
// window.addEventListener("blur",(event)=>{
//     console.log("this page is now blured !")
// })

// window.addEventListener("click",()=>{
//     console.log("Clicked !")
// })

// // window.alert()
// // window.prompt()

document.querySelector("#img1").addEventListener("click", () => {
    document.querySelector("#img1").setAttribute("src", "https://picsum.photos/id/238/200/300")
})

let show = false

document.querySelector("#shbtn").addEventListener("click", () => {

    show = !show

    // let type = document.querySelector("#password").getAttribute("type")

    if (show) {
        document.querySelector("#password").setAttribute("type", "text")
    }else{
        document.querySelector("#password").setAttribute("type", "password")
    }
    
})
