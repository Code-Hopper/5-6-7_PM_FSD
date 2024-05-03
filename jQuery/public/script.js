// starting jq

// document - $

// console.log(document)

// console.log($)

// let jsTarget = document.querySelector("#id1")

// console.log(jsTarget)

// jsTarget.innerHTML = "new data !"

// jsTarget.style.color = "red"

// let jqTarget = $("#id1")

// console.log(jqTarget)

// jqTarget.html("New data from jq !")

// jqTarget.css("color","blue")
// // jqTarget.css("font-size","150px")
// jqTarget.css("background","linear-gradient(red,blue)")

// jqTarget.click(()=>{
//     alert("heading was clicked !")
// })

// jqTarget.mouseover(()=>{
//     alert("heading was hovred  !")
// })

// jqTarget.dblclick(()=>{
//     alert("heading was double clicked  !")
// })

// $(document).keypress((event)=>{
//     console.log(event.key)
// })

// ANIMATIONS

$("#btn").click(()=>{
    $("#id1").fadeIn(200,()=>{
        console.log("fade completed !")
    })
})

$("#btn2").on("mouseover",()=>{
    $("#element1").toggleClass("collapse")
})