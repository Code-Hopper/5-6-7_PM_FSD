// target all buttons

let buttons = document.querySelectorAll(".calc-number")

// target all specials

let specialButtons = document.querySelectorAll(".calc-special")

// target display

let display = document.querySelector("#calc-main-display")


for(let button of buttons){
    button.addEventListener("click",(event)=>{
        display.innerText  += button.dataset.value
    })
}

// tageting special buttons

specialButtons.forEach((button)=>{
      

    button.addEventListener("click",(event)=>{
        console.log(event)
        console.log(event.srcElement.dataset.value)

        switch(event.srcElement.dataset.value){
            case "C" : display.innerHTML = ""
            break;
            case "<-" : display.innerHTML = display.innerHTML.slice(0 , display.innerHTML.length - 1)
            break;
            case "+" : null
            break;
            case "<-" : display.innerHTML = display.innerHTML.slice(0 , display.innerHTML.length - 1)
            break;
            case "C" : display.innerHTML = ""
            break;
            case "<-" : display.innerHTML = display.innerHTML.slice(0 , display.innerHTML.length - 1)
            break;
        }

    })

})


let sum = ["1","2","3"]
let addition = 0 ;
let sub = ["45" , "10" , "1110"]
let substraction = 0;
let mul = ["8"]
let div = []

for(let element of sum){
    element = Number(element)
    addition += element
}

console.log(addition)

for(let element of sub){
    element = Number(element)
    substraction -= element
    substraction = Math.abs(substraction)
}

console.log(substraction)

// 1 / 5 = 0.20

// 1 / 0 = infinity

// 0 / 5 = 0