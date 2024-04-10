// array 
// for of , forEach , map, filter, sort

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let odd = []
// let even = []

// same using forEach (methods special of array)

// Array.forEach(function (element,index) {

// })

// Array.forEach((element,index) => {

// })


// numbers.forEach((element,index)=>{
//     console.log(`From forEach method element is : ${element}`)
//     console.log(`From forEach method at index : ${index}`)
// })

// numbers.forEach((element)=>{
//     if(element % 2 == 0){
//         even.push(element)
//     }else{
//         odd.push(element)
//     }
// })

// console.log(even)
// console.log(odd)

// let value = numbers.forEach((element)=>{
//     return element
// })

// array.map(callBackFuntion)

// let displayElement = (element,index) =>{
//     console.log(element)
//     console.log(index)
// }

// numbers.map(displayElement)

// displayElement("amey")

// console.log(value)

// forEach accepts a callBack function

// console.log(numbers.length)

// for(let number of numbers){
//     console.log(number)
// }

// let students = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// for(let student of students){
//     console.log(student)
// }

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [10,11,12]
// ]

// for(let row of matrix){
//     for(let column of row){
//         console.log(column)
//     }
// }

// for(let i = 0 ; i < matrix.length ; i++){
//     for(let j = 0 ; j < 1 ; j++){
//         console.log(matrix[i][j])
//     }
// }

// array of objects

// let students = [ 
//     {name: "amey" , age : 13 , contact: 9766696550},
//     {name: "jayesh" , age : 19 , contact: 787454683},
//     {name: "Anushree" , age : 23 , contact: 789745464},
//     {name: "Ayushi" , age : 20 , contact: 4567688963},
//     {name: "Unnati" , age : 11 , contact: 5457993632},
//     {name: "Tina" , age : 16 , contact: 8777999633},
//     {name: "yash" , age: 22, contact: 7897987642 }
// ]

// students[0].address = "nagpur"

// we have created a data sheet of student in array called students each element of this array is object which has some keys like name, age, contact

// students.push({name:"om", age: 15 , contact: 787987987})

// for(let student of students){
//     student.address = "nagpur"
// }

// for(let student of students){
//     console.log(student)
// }

// students.forEach((student,index)=>{
//     console.log(student)
//     console.log("at")
//     console.log(index)
// })

// let displayStudents = (student)=>{
//     console.log("from map")
//     console.log(student)
// }

// students.map(displayStudents)

// for(let i=0;i< students.length; i++){
//     console.log("for loop")
//     console.log(students[i])
// }

// wap in js to make a array of 10 random numbers element(using Math class and array push/unshift method)

let createRandomNumberArray = (length, RangeLimit) => {
    let ArrayName = []
    let randomNumber = 0
    for (let i = 0; i < length; i++) {
        randomNumber = Math.floor(Math.random() * RangeLimit + 1)
        ArrayName[i] = randomNumber
    }
    return ArrayName;
}

// call this function then set the length of array, then set the upper limit of a element number  then this function will return a array of random numbers

let createRandomCharArray = (length) => {
    let ArrayName = []
    let randomNumber = 0

    let allAlphabets = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < length; i++) {
        randomNumber = Math.floor(Math.random() * 26)  //0
        ArrayName[i] = allAlphabets.charAt(randomNumber)
    }

    // make a assending sort for string

    return ArrayName;
}

let sortArray = (array) => {
    // bubble sort
    let temp;
    let i, j = 0;

    // logic

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

// let numbers = createRandomNumberArray(10, 5)

// console.log(numbers)

// linear search algorithm (it will help us to find the position of any element if exits if not found then postion = -1)

// let searchElement = Number(prompt("Enter Number to search !"))

// let postion = -1

// let found = false

// for (let i = 0; i < numbers.length; i++) {
//     if (searchElement == numbers[i]) {
//         found = true
//         postion = i + 1
//         break;
//     }
// }

// if(found){
//     console.log(`Element was found on position : ${postion} !`)
// }else{
//     console.log(`Element was not found  ${postion} !`)
// }

// wap a linear search program also find the number of itration of found element

// let searchElement = Number(prompt("Enter Number to search !"))

// let postion = -1

// let found = false

// let repeatCount = []

// for (let i = 0; i < numbers.length; i++) {
//     if (searchElement == numbers[i]) {
//         found = true
//         postion = i + 1
//         repeatCount.push(postion)
//     }
// }

// if(found){
//     console.log(`Element ${searchElement} was found on position/s : ${repeatCount} | the element has been repeated ${repeatCount.length} times !`)
// }else{
//     console.log(`Element ${searchElement} was not found position : ${postion} | the element has been repeated ${repeatCount.length} times !`)
// }

// sorting

// let nums = createRandomNumberArray(5,100)

// console.log(nums)

// // bubble sort algo 
// let temp;
// let i , j = 0;

// // logic

// for( i = 0 ; i < nums.length ; i++){
//     for( j = 0 ; j < nums.length ; j++){
//         if( nums[j] > nums[j+1] ){
//             temp = nums[j]
//             nums[j] = nums[j+1]
//             nums[j+1] = temp
//         }
//     }
// }

// console.log("sorted array 1 is  : ")
// console.log(nums)

// for( i = 0 ; i < nums.length ; i++){
//     for( j = 0 ; j < nums.length ; j++){
//         if( nums[j] < nums[j+1] ){
//             temp = nums[j]
//             nums[j] = nums[j+1]
//             nums[j+1] = temp
//         }
//     }
// }

// console.log("sorted array 2 is : ")
// console.log(nums)

// binary search algorithm


// genrating radom array

// let Array1 = createRandomNumberArray(10, 100)

// console.log(Array1)

// Array1 = sortArray(Array1)

// console.log(Array1)

// write less

// let searchValue = prompt("Enter Value to search in Array Using Binary Algo !")

// let Array1 = [10, 22, 33, 45, 57, 58, 60, 99, 110, 111, 112, 113, 114, 115]

// let searchValue = 50

// // logic
// // if value is found return the value or else if not found return -1

// let upperBound = Array1.length - 1
// let lowerBound = 0

// console.log(upperBound, lowerBound, midPoint)

// for (let i = 0; upperBound != lowerBound; i++) {

//     if (midPoint == searchValue) {
//         console.log(`we found the element ${midPoint} !`)
//         break;
//     } else if (midPoint < searchValue) {
//         upperBound = midPoint
//         lowerBound = 0
//         midPoint = lowerBound + Math.floor(upperBound - lowerBound / 2)
//     }else{
//         upperBound = Array1.length - 1
//         lowerBound = midPoint
//         midPoint = lowerBound + Math.floor(upperBound - lowerBound / 2)
//     }

// }

// while (midPoint <= upperBound) {
//     if (Array1[midPoint] == searchValue) {
//         console.log(`we found the element ${midPoint} !`)
//         // break;
//     } else if (midPoint < searchValue) {
//         upperBound = midPoint
//         lowerBound = 0
//         midPoint = lowerBound + Math.floor((upperBound - lowerBound )/ 2)
//     } else {
//         upperBound = Array1.length - 1
//         lowerBound = midPoint
//         midPoint = lowerBound + Math.floor((upperBound - lowerBound )/ 2)
//     }
// }

// while (lowerBound <= upperBound) {

//     let midPoint = lowerBound + Math.floor((upperBound - lowerBound) / 2)


//     if (Array1[midPoint] == searchValue) {
//         console.log(`Element Found ${searchValue}`)
//         break;
//     } else if (Array1[midPoint] < searchValue) {
//         lowerBound = midPoint
//     } else if (Array1[midPoint] > searchValue){
//         upperBound = midPoint
//     }else{
//         console.log(`Element not Found ${searchValue}`)
//     }
// }

// let binarySearchFunction = (array,searchValue) =>{
//     let upperBound = array.length - 1
//     let lowerBound = 0

//     while(lowerBound <= upperBound){
//         let midPoint = lowerBound + Math.floor((upperBound - lowerBound)/2)

//         if(array[midPoint] == searchValue){
//             return `element ${searchValue} is present in the array !`
//         }

//         if(array[midPoint] < searchValue){
//             lowerBound = midPoint + 1
//         }else{
//             upperBound = midPoint - 1
//         }
//     }

//     return `element ${searchValue} is not present in the array !`

// }

// console.log(binarySearchFunction(Array1,58))

// using while loop

let Array1 = createRandomNumberArray(10,100)

Array1 = sortArray(Array1)

console.log(Array1)

let searchValue = Number(prompt("Enter Search Value for Binary Search in A array !"))
let flag = false

let lowerBound = 0
let upperBound = Array1.length - 1

let midPoint;

let i = 0

while (lowerBound <= upperBound) {

    if(searchValue < Array1[lowerBound] || searchValue > Array1[upperBound] ){
        console.log("search element is not present !")
        break;
    } 

    midPoint = lowerBound + Math.floor((upperBound - lowerBound) / 2)

    if (Array1[midPoint] === searchValue){
        flag = true
        break;
    }

    if(Array1[midPoint] < searchValue){
        lowerBound = midPoint + 1
    }else{
        upperBound = midPoint - 1
    }

    i = i + 1

}

if(flag){
    console.log(`Element ${searchValue} found at index ${midPoint} !`)
}else{
    console.log(`Element ${searchValue} not found !`)
}

console.log(i)