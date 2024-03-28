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

let students = [ 
    {name: "amey" , age : 13 , contact: 9766696550},
    {name: "jayesh" , age : 19 , contact: 787454683},
    {name: "Anushree" , age : 23 , contact: 789745464},
    {name: "Ayushi" , age : 20 , contact: 4567688963},
    {name: "Unnati" , age : 11 , contact: 5457993632},
    {name: "Tina" , age : 16 , contact: 8777999633},
    {name: "yash" , age: 22, contact: 7897987642 }
]

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