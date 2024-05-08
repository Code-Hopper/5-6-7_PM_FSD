// Formula for BMI is bmi = weight(kg)/sq.height(m)

// kg and meters

// bmi < 18 - under weight 12.5%
//25 < bmi > 18 - normal weight 37.5%
//bmi > 25 - over weight 62.5%
//bmi > 30 - obesed 87.5%

let meterButton = $("#metersSubmitButton")

let answer = $("#bmiAnswer")

let pointer = $('#bmi-pointer')

let move = 0

let bmi = 0;

meterButton.on("click", () => {
    let weight = Number(document.querySelector("#weightKg").value)
    let height = Number(document.querySelector("#heightM").value)
    let UserName = document.querySelector("#userName").value

    console.log(weight)
    console.log(height)

    // calculate bmi 

    bmi = (weight / Math.pow(height, 2)).toFixed(2)

    switch (bmi) {
        case bmi < 18: move = "12.5%"
            break;
        case bmi > 18 && bmi < 25: move = "37.5%"
            break;
        case bmi > 25 && bmi < 30: move = "62.5%"
            break;
        case bmi > 30: move = "87.5%"
            break;
        default: move = "0"
    }


    if (bmi < 18) {
        move = "12.5%"
    } else if (bmi > 18 && bmi < 25) {
        move = "37.5%"
    } else if (bmi > 25 && bmi < 30) {
        move = "62.5%"
    } else if (bmi > 30) {
        move = "87.5%"
    } else {
        move = "0"
    }


    console.log(move)

    console.log(UserName)

    answer.html(`${UserName} your BMI is ${bmi} kg/m.sq !`)

    pointer.css("left", move)

})