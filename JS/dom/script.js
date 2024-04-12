// document object model - dom

// document: class, tagname, id 

// console.log(document)

// let a = document.getElementsByClassName("second")
// // return a HTML collection that can be used as an Array

// console.log(a)
// console.log(a.length)
// console.log(a[2])

// let b = document.getElementsByTagName("h1")
// // return a HTML collection that can be used as an Array

// console.log(b)
// console.log(b.length)
// console.log(b[0])

// let c = document.getElementById("i1")
// // return only one element if exists else null

// console.log(c)

// querySelector
// querySelectorAll

// let d = document.querySelector("h1.first")
// // returns only single elememt / first occurence if exists

// console.log(d)

// let e = document.querySelectorAll("#i1")
// // returns Node List of element that can be used as an array 

// console.log(e)

// changes in HTML and CSS 

// innerHTML , innerText , properties

// target d1

// console.log(document.getElementById("d1"))
// // innerHTML,innerText

// document.getElementById("d1").innerHTML = "This is From JS"

// document.getElementById("d1").innerText = "This is InnerTExt"

// document.getElementsByTagName("h1")[0].innerHTML = "this is new html"

// accept name from window prompt and display in #name element

// let n = prompt("Enter Your Name !")

// if(n){
//     document.getElementById("name").innerHTML = `Hello ! ${n}.`
// }else{
//     document.getElementById("name").innerHTML = "nothing in Name !"
// }

// document.getElementById("d1").style.background = "blue"
// document.getElementById("d1").style.width = "500px"
// document.getElementById("d1").style.height = "500px"
// document.getElementById("d1").style.borderRadius = "100%"
// document.getElementById("d1").style.transform = "skew(50deg)"

// document.getElementById("d1").style.animation = "ani1 0.5s ease 50" 

// document.selector("element").style.property = "values"

// events based javascript 
// function hello() {
//     alert('hello')
//     document.getElementById("d1").style.background = "blue"
// }

document.getElementById("btn").onclick = function () {
    document.getElementById("d1").style.background = "blue"
    document.getElementById("d1").style.width = "500px"
    document.getElementById("d1").style.height = "500px"
}

let i = 0
let j = 0 
let k = 0

document.getElementById("d1").ondblclick = () => {

    // i <= 249 ? i = i + 50 :  j <= 249 ? j = j + 50 : k <= 249 ? k = k + 50 : k = 0

    if( i <= 249 ){
        i = i + 50
    }else if(j <= 249){
        j = j + 50
        i = 0
    }else if(k <= 249){
        k = k + 50
        i , j = 0
    }else{
        i , j , k = 0
    }


    console.log(i)
    document.getElementById("d1").style.background = `rgb(${i},${j},${k})`

}