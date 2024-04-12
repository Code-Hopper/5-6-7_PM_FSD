let rollBtn = document.getElementById("roll-dice")

let circles = document.getElementsByClassName("circle")

rollBtn.onclick = () => {

    // genrate a random number

    let randomNumber = Math.floor(Math.random() * 6)

    console.log(randomNumber)

    document.getElementById("dice").style.animation = "rollDice 0.4s ease"

    // show circle equal to random number and hide others

    for(let i = 0 ; i <= 5 ; i++){
        if (i <= randomNumber) {
            circles[i].style.display = "block"
        }else{
            circles[i].style.display = "none"
        }
    }

}