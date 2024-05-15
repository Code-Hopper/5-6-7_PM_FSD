let playerInfoForm = $("#playersInfo")

playerInfoForm.on("submit", (e) => {
    e.preventDefault()
    timer()
})

// create a 10 min timer

let sec = 0
let min = 10

function timer() {
    // reduce seconds as -1 in each one second

    let time;

    let timeCounter = setInterval(() => {

        let second;

        if (sec < 0) {
            sec = 59
            min--
        }
        if (sec < 10) {
            second = `0${sec}`
        } else {
            second = `${sec}`
        }
        sec--

        // console.log(`${min}:${second}`)

        time = `${min}:${second}`

        $("#timer").html(time)

        if (min < 2) {
            $("#timer").removeClass("text-light")
            $("#timer").addClass("text-danger")
        }

        if (min < 0) {
            clearInterval(timeCounter)
            $("#timer").html("Time Out !")
        }

    }, 1000)

}