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