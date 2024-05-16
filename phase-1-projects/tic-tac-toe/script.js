let playerInfoForm = $("#playersInfo")

let player1 = {
    name: "",
    color: ""
};
let player2 = {
    name: "",
    color: ""
};

playerInfoForm.on("submit", (e) => {
    e.preventDefault()
    timer()

    player1.name = e.target[0].value
    player1.color = e.target[1].value

    player2.name = e.target[2].value
    player2.color = e.target[3].value

    $("#player1").html(player1.name)
    $("#player1").css("background", player1.color)

    $("#player2").html(player2.name)
    $("#player2").css("background", player2.color)

    startGame()

})

let stopButton = $("#stop-game").click(()=>{
    stopGame()
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

// to check the win or draw of current game

function stopGame(){
    $("#winner").text(`Game Has Been Stoped`)
}

function startGame() {

    // there will be 2 players 'X' and 'O'

    // to get where they have clicked 

    let grid = ["", "", "", "", "", "", "", "", ""]

    let cells = document.querySelectorAll(".grid-cell")

    let currentPlayer = "X"

    let cellIndex = ""

    cells.forEach((cell) => {

        $(cell).on("click", () => {
            // alert()
            console.log(cell.dataset.number)
            cellIndex = cell.dataset.number

            if (grid[cellIndex] === "") {
                alert("player can mark this !")
                grid[cellIndex] = currentPlayer
                console.log(grid)
                $(cell).text(currentPlayer)
                if (checkWinner()) {
                    console.log(`${currentPlayer} wins !`)
                    $("#winner").text(`${currentPlayer} wins !`)
                } else {
                    console.log(`${currentPlayer} not wins yet !`)
                }
            } else {
                alert("player cannot select this cell !")
            }

            currentPlayer = currentPlayer == "X" ? "O" : "X"

        })
    })

    // logics for checking winner

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ]

    function checkWinner() {

        for (let i = 0; i < winningCombinations.length; i++) {

            let [a, b, c] = winningCombinations[i]

            if (grid[a] && grid[a] == grid[b] && grid[b] == grid[c]) {
                console.log("grid matching is ", grid[a], grid[b], grid[c])
                return true
            } else {
                console.log("grid matching is ", grid[a], grid[b], grid[c])
            }

            // // check if grid is full and declear a draw !

            // for (let j = 0; j < grid.length; grid++) {
            //     if (!grid[i]) {
            //         $("#winner").text(`Grid Is Full Game Draw !`)
            //     }
            // }

        }
    }
}


// stop game on timmer and reset the grid to all empty