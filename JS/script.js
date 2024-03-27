// // // // // // // // // alert("hello from script js!")

// // // // // // // // // variables
// // // // // // // // // scope name = value;

// // // // // // // // // comment in js

// // // // // // // // /*
// // // // // // // // this
// // // // // // // // is
// // // // // // // // multi
// // // // // // // // line 
// // // // // // // // commet
// // // // // // // // */

// // // // // // // // // let a = "10"
// // // // // // // // // let b = 10
// // // // // // // // // let c = 30

// // // // // // // // // oprators

// // // // // // // // // 1. Airhtmatics + - / * %
// // // // // // // // // 2. increement and decreement ++ , -- (pre,post)
// // // // // // // // // 3. Assignment =
// // // // // // // // // 4. Conditional/Comparision Oprators < , > , <= , >= , != , == , ===
// // // // // // // // // 5. (Logics gates) Logical Oprators &&(AND) , ||(OR) , !(NOT) 
// // // // // // // // // 6. Bitwise oprators & , ||
// // // // // // // // // 7. Dot notation ' . '

// // // // // // // // // opration

// // // // // // // // // () , [] , {}

// // // // // // // // // data types in js
// // // // // // // // // 1)primitve , 2)non-primitve

// // // // // // // // // 1)  Number (integers, floats, double) (1,1.0,1.514) , String (group of charchters ,a string has to be writing in qoutes "" , '' , `` back ticks ), Boolean (true, false)

// // // // // // // // // undefined (trying to access before ), null

// // // // // // // // // 2) Array, objects, function
// // // // // // // // // NaN (not a number)

// // // // // // // // // let z = null

// // // // // // // // let a = 30
// // // // // // // // let b = "amey"
// // // // // // // // let c = false

// // // // // // // // let d = [1,2,3,4]
// // // // // // // // let e = {
// // // // // // // //     name: "name 1"
// // // // // // // // }

// // // // // // // // let f = () =>{
// // // // // // // //     console.log('hello')
// // // // // // // // }

// // // // // // // // let g;

// // // // // // // // let h = null

// // // // // // // // let i = Number("a1")

// // // // // // // // console.log(typeof(a))
// // // // // // // // console.log(typeof(b))
// // // // // // // // console.log(typeof(c))
// // // // // // // // console.log(typeof(d))
// // // // // // // // console.log(typeof(e))
// // // // // // // // console.log(typeof(f))
// // // // // // // // console.log(typeof(g))
// // // // // // // // console.log(typeof(h))
// // // // // // // // console.log(i)

// // // // // // // // output and input function

// // // // // // // // built-in (jo js mai hai)  function output function
// // // // // // // // console.log() , window.alert() , document.write()

// // // // // // // // they accept any data string, number, boolean

// // // // // // // // console.log("hello world !")
// // // // // // // // console.log("hello world  2 !")

// // // // // // // // console.warn("this is warning !")
// // // // // // // // console.error("this is warning !")
// // // // // // // // console.info("this is warning !")
// // // // // // // // console.table([1,2,3])

// // // // // // // // window.alert("hello !")

// // // // // // // // document.write("this is something !") // document means html docs

// // // // // // // // built-in input function

// // // // // // // let data = window.prompt("")
// // // // // // // // prompt function will also returns us a string 
// // // // // // // console.log(data)
// // // // // // // console.log(typeof(data))


// // // // // // // // type casting changing the data type of a certain data

// // // // // // // // Number -> String 
// // // // // // // // String -> Number(conditions applied)
// // // // // // // // Number -> Boolean
// // // // // // // // Boolean -> Number
// // // // // // // // Boolean -> String
// // // // // // // // String -> Boolean

// // // // // // // // using function keyword/normal function
// // // // // // // // function doSomething () {

// // // // // // // // }

// // // // // // // // ES6 Module/Arrow Function/Call Back
// // // // // // // // let doSomething = () =>{

// // // // // // // // }

// // // // // // // type casting

// // // // // // // let data = 1

// // // // // // // console.log("before casting")
// // // // // // // console.log(typeof(data))
// // // // // // // console.log(data)

// // // // // // // // number ->  string
// // // // // // // // number ->  boolean

// // // // // // // // re-assignment
// // // // // // // data = String(data)
// // // // // // // console.log("after casting")
// // // // // // // console.log(typeof(data))
// // // // // // // console.log(data)


// // // // // // // data = Boolean(data)
// // // // // // // console.log("after casting")
// // // // // // // console.log(typeof(data))

// // // // // // // // if value exists then true else false

// // // // // // // console.log(data)


// // // // // // // let data = ""

// // // // // // // console.log("before casting")
// // // // // // // console.log(typeof(data))
// // // // // // // console.log(data)

// // // // // // // // string ->  number
// // // // // // // // string ->  boolean

// // // // // // // // re-assignment
// // // // // // // // data = Number(data)
// // // // // // // // console.log("after casting")
// // // // // // // // console.log(typeof(data))
// // // // // // // // console.log(data)

// // // // // // // // wheneven we try to cast a alpha numeric strings to number we will also get NaN(Not a Number)


// // // // // // // data = Boolean(data)
// // // // // // // console.log("after casting")
// // // // // // // console.log(typeof(data))

// // // // // // // // if value exists then true else false

// // // // // // // console.log(data)

// // // // // // let data = false

// // // // // // console.log("before casting")
// // // // // // console.log(typeof(data))
// // // // // // console.log(data)

// // // // // // // boolean ->  number
// // // // // // // boolean ->  string

// // // // // // // re-assignment
// // // // // // // data = Number(data)
// // // // // // // console.log("after casting")
// // // // // // // console.log(typeof(data))
// // // // // // // console.log(data)

// // // // // // // if value is true then number casting becomes 1
// // // // // // // if value is false then number casting becomes 0

// // // // // // data = String(data)
// // // // // // console.log("after casting")
// // // // // // console.log(typeof(data))

// // // // // // // if value exists then true else false

// // // // // // // false - boolean
// // // // // // // "false" - string

// // // // // // console.log(data)

// // // // // // // functions involved in casting 

// // // // // // Number(data)(this function casts to number) , String(data), Boolean(data)

// // // // // // hoisting in javascript
// // // // // // default thing in js that it hoist the declaration part above all the scopes

// // // // // // console.log(x) 
// // // // // // console.log will give undefined because only let x is rised above
// // // // // // var x = 5

// // // // // // ++(+1), --(-1) | pre , post  

// // // // // // let x = 10

// // // // // // console.log(x++)
// // // // // // console.log(x)
// // // // // // console.log(x)

// // // // // // console.log(++x)
// // // // // // console.log(x)
// // // // // // console.log(x)

// // // // // // console.log(x--)
// // // // // // console.log(x)
// // // // // // console.log(x)

// // // // // // console.log(--x)
// // // // // // console.log(x)
// // // // // // console.log(x)

// // // // // // airthmatics + , - , * , / , %

// // // // // // let a = 10
// // // // // // let b = 20

// // // // // // let c = a + b
// // // // // // console.log(c)

// // // // // // c = a - b
// // // // // // console.log(c)

// // // // // // c = a * b
// // // // // // console.log(c)

// // // // // // c = a / b
// // // // // // console.log(c)

// // // // // // c = a % b
// // // // // // console.log(c)

// // // // // // a += b
// // // // // // a = a + b
// // // // // // a -= b
// // // // // // a *= b
// // // // // // a /= b
// // // // // // a %= b 
// // // // // // a = a % b
// // // // // // console.log(a)

// // // // // // string concatation
// // // // // // joining string with variables, number, another string

// // // // // // let name = "om"
// // // // // // let age = 12
// // // // // // console.log("hello my name is " + name + ", my age is " + age)

// // // // // // document.write("hello my name is " + name + ", my age is " + age)

// // // // // // window.alert("hello my name is " + name + ", my age is " + age)

// // // // // // window.prompt("hello my name is " + name + ", my age is " + age)

// // // // // // string + string = string 

// // // // // // string + number = string 

// // // // // // number + string = string

// // // // // // number + number = number

// // // // // // console.log(5+5)
// // // // // // console.log("5"+"5")
// // // // // // console.log("5"+5)
// // // // // // console.log(5+"5")

// // // // // let num1 = window.prompt("Enter Number 1")
// // // // // console.log(typeof(num1))

// // // // // num1 = Number(num1)

// // // // // console.log(typeof(num1))


// // // // // // let num2 = window.prompt("Enter Number 2")
// // // // // // console.log(typeof(num2))

// // // // // // num2 = Number(num2)

// // // // // // console.log(typeof(num2))

// // // // // let num2 = Number(window.prompt("Enter Number 2"))
// // // // // console.log(typeof(num2))

// // // // // console.log(num1 + num2)

// // // // // ES6 - template litrals

// // // // // let name = "amey"

// // // // // let age = "21"

// // // // // console.log(`hello my name is ${name}, my age is ${age} `)

// // // // // ternary oprator - ?

// // // // // condition ? true block : false block

// // // // // conditional statements
// // // // // if, if-else, if-elseif , nasted if, switch case, ternary statement (?) 
// // // // // looping statements
// // // // // while, do while, for

// // // // // syntax for writting if statements

// // // // // if(condition){
// // // // //     // true block
// // // // // }

// // // // // nextline

// // // // // let a = 100
// // // // // let b = 200

// // // // // if( a > b ){
// // // // //     console.log(`a i.e. ${a} is greater than b i.e. ${b}`)
// // // // // }

// // // // // console.log("program completed !")

// // // // // if-else syntax: 

// // // // // if(condition){
// // // // //     // true block
// // // // // }else{
// // // // //     // false block
// // // // // }

// // // // // next lines

// // // // // let a = 10;
// // // // // let b = 20

// // // // // if(a < b){
// // // // //     console.log("B is greater than A")
// // // // // }else{
// // // // //     console.log("A is greater than B")
// // // // // }

// // // // // nasted if syntax

// // // // // if(condition){
// // // // //     // true block 
// // // // //     if(condition){
// // // // //         // true block
// // // // //     }else{

// // // // //     }
// // // // // }else{

// // // // // }

// // // // // 12 , jee , cet  

// // // // // if (12th pass) {
// // // // //     if (jee pass) {
// // // // //         if (cet pass) {
// // // // //             console.log("addmission granted !")
// // // // //         }else{
// // // // //             console.log("change college !")
// // // // //             console.log("give donation!")
// // // // //         }
// // // // //     }else{
// // // // //         console.log("next attempt")
// // // // //     }
// // // // // }else{
// // // // //     console.log("Re-exam for 12th")
// // // // // }

// // // // // check wheater the number 1 A is greater than B and C 

// // // // // let a = 250
// // // // // let b = 20 
// // // // // let c = 30

// // // // // if(a > b){
// // // // //     if( a > c ){
// // // // //         console.log("A is greater than B & C.")
// // // // //     }else{
// // // // //         console.log("A is not graeter than B & C")
// // // // //     }
// // // // // }else{
// // // // //     console.log("A is not graeter than B & C")
// // // // // }

// // // // // if-elseif syntax 

// // // // // if(condition){
// // // // //     // true block
// // // // // }else if(condition) {

// // // // // }else{

// // // // // }

// // // // // greater of 3 number

// // // // // let x = window.prompt("enter value of x")

// // // // // console.log(x)

// // // // // console.log(typeof(x))

// // // // // x = Number(x)

// // // // // console.log(x)

// // // // // console.log(typeof(x))


// // // // // let y = 200 
// // // // // let z = 300

// // // // // if( x > y ){

// // // // //     if(x > z){
// // // // //         console.log("X is greater than y and z !")
// // // // //     }else{
// // // // //         console.log("Z is greater than y and x !")
// // // // //     }

// // // // // }else if(y > z){
// // // // //     console.log("Y greater than x and z !")
// // // // // }else{
// // // // //     console.log("z greater than x and y !")
// // // // // }

// // // // // ternary statement condition ? true block : flase block

// // // // // let a = 200
// // // // // let b = 300
// // // // // let c = 40

// // // // // // a > b ? console.log("a is greater than b") : console.log("b is greater than a") 

// // // // // a > b ?
// // // // //     a > c ? console.log("A is Greater than B And C") : console.log("C is Greater than A And B")
// // // // //      : 
// // // // //     b > c ? console.log("B is Greater than A And C") : console.log("C is Greater than B And B")

// // // // // < , > , <= , >= , != , == , ===

// // // // // let age = 17

// // // // // if(age >= 18){
// // // // //     console.log("you can drive a car !")
// // // // // }else{
// // // // //     console.log("you can't drive a car !")
// // // // // }

// // // // // if(age <= 18){
// // // // //     console.log("you are teenager !")
// // // // // }else{
// // // // //     console.log("you are not a teenager !")
// // // // // }

// // // // // even , odd % 2 = 0

// // // // // let number = 9

// // // // // if(number % 2 == 0){
// // // // //     console.log(`${number} is even !`)
// // // // // }else{
// // // // //     console.log(`${number} is odd !`)
// // // // // }

// // // // // if( 10  == "10" ){
// // // // //     console.log("they are equal !")
// // // // // }else{
// // // // //     console.log("they are not equal !")
// // // // // }

// // // // // if( 10  === "10" ){
// // // // //     console.log("they are equal !")
// // // // // }else{
// // // // //     console.log("they are not equal !")
// // // // // }

// // // // // if(number % 2 != 0){
// // // // //     console.log(`${number} is odd !`)
// // // // // }else{
// // // // //     console.log(`${number} is even !`)
// // // // // }

// // // // // wap in js to find wheater a year entered is leap year or not
// // // // // condition for a year to be a leap year
// // // // // year must be evenly divisible by 4 and it can be evenly divisible by 100 but the same time has to be evenly divisible by 400 also then only a year will be called as leap year

// // // // // 2024%100 != 0

// // // // // 2024%400 != 0 

// // // // // 2024 % 4 == 0

// // // // // let year = 2028

// // // // // if(year % 100 == 0){
// // // // //     if(year % 400 == 0){
// // // // //         console.log(`${year} is a leap year !`)
// // // // //     }else{
// // // // //         console.log(`${year} is not a leap year !`)
// // // // //     }
// // // // // }else if(year % 4 == 0){
// // // // //     console.log(`${year} is a leap year !`)
// // // // // }else{
// // // // //     console.log(`${year} is not a leap year !`)
// // // // // }

// // // // // logicals oprators AND | OR

// // // // // condition p | condition q | p AND q
// // // // // true            false       false
// // // // // false           true        false
// // // // // false           false       false
// // // // // true            true        true

// // // // // condition p | condition q | p OR q
// // // // // true            false       true
// // // // // false           true        true
// // // // // false           false       false
// // // // // true            true        true



// // // // // if((year % 4 == 0) || ( (year % 100 == 0) && (year % 400 == 0) ) ){
// // // // //     console.log(`${year} is a leap year !`)
// // // // // }else{
// // // // //     console.log(`${year} is not a leap year !`)
// // // // // }

// // // // // year % 4 == 0 ||  (year % 100 == 0) && (year % 400 == 0)  ? console.log(`${year} is a leap year !`) : console.log(`${year} is not a leap year !`)

// // // // // switch case is used to create menu driven programs

// // // // // let choice = 10

// // // // // switch(choice){
// // // // //     case 1: console.log("this is case 1")
// // // // //     break;
// // // // //     case 2: console.log("this is case 2")
// // // // //     break;
// // // // //     case 3: console.log("this is case 3")
// // // // //     break;
// // // // //     case 4: console.log("this is case 4")
// // // // //     break;
// // // // //     case 5: console.log("this is case 5")
// // // // //     break;
// // // // //     default: console.log("if you are seeing this you may have selected a case that does not exists !")
// // // // // }

// // // // // let choice = "x"

// // // // // switch(choice){
// // // // //     case "a": console.log("this is case a")
// // // // //     break;
// // // // //     case "b": console.log("this is case b")
// // // // //     break;
// // // // //     case 3: console.log("this is case 3")
// // // // //     break;
// // // // //     case 4: console.log("this is case 4")
// // // // //     break;
// // // // //     case 5: console.log("this is case 5")
// // // // //     break;
// // // // //     default: console.log("if you are seeing this you may have selected a case that does not exists !")
// // // // // }

// // // // // VOWELS a e i o u

// // // // // let char  = prompt("enter char to check if it is a vowel !")

// // // // // switch(char){

// // // // //     case "a": console.log(`${char} is a vowel !`)
// // // // //     break;

// // // // //     case "e": console.log(`${char} is a vowel !`)
// // // // //     break;

// // // // //     case "i": console.log(`${char} is a vowel !`)
// // // // //     break;

// // // // //     case "o": console.log(`${char} is a vowel !`)
// // // // //     break;

// // // // //     case "u": console.log(`${char} is a vowel !`)
// // // // //     break;

// // // // //     default: console.log(`${char} is a consonant !`)

// // // // // }

// // // // // using switch take user input num1 and num2 type cast them in numbers,
// // // // // give user a menu + , - , / , * , % , based on the case selection make an arithmatic opration.

// // // // // STRING manipulation

// // // // // length property

// // // // // let name = "amey khondekar"

// // // // // // length property returns nuber of chars present in a string

// // // // // console.log(name.length)

// // // // // string methods/function

// // // // // // amey khond e k  a  r
// // // // // // 012345678910 11 12 13
// // // // // // string.charAt(index) return a charc at specified index number
// // // // // console.log(name.charAt(0))

// // // // // // string.indexOf("char") return first occured index number if exists or returns -1

// // // // // console.log(name.indexOf('z'))

// // // // // console.log(name.indexOf('e'))

// // // // // // string.lastIndexOf("char") return last occured index number if exists or returns -1

// // // // // console.log(name.lastIndexOf('e'))

// // // // // concatation

// // // // // let fname = "amey"
// // // // // let lname = "khondekar"

// // // // // let fullName = fname.concat(lname)

// // // // // console.log(fullName)

// // // // // to change the case of a string i.e. upper case/lower case/

// // // // // let string1 = "THIS IS STRING 1"

// // // // // console.log(string1)

// // // // // // string.toLowerCase()

// // // // // console.log(string1.toLowerCase())

// // // // // let string2 = "this is string 2"

// // // // // console.log(string2)

// // // // // // string.toUpperCase()

// // // // // console.log(string2.toUpperCase())

// // // // // slice and substring

// // // // let fullName = "amey khondekar"

// // // // //  string.slice( starting index , ending index ) returns a new string with chars of the privious string from starting index to ending index

// // // // let firstName = fullName.slice( 0 , 6 )

// // // // console.log(firstName)

// // // // console.log(fullName)


// // // // let fname = fullName.substring(0,4)

// // // // console.log(fname)

// // // // console.log(fullName)

// // // // let data = window.prompt("Enter Something in data !")

// // // // // string.trim() it will remove additional spaces from leading and trailing part

// // // // data = data.trim() 

// // // // console.log(data)

// // // // console.log(data.length)

// // // // let newString = "This is a new string with some more text content that can be a a a displayed !"

// // // // // console.log(newString)

// // // // // // newString = newString.replace("a","A")
// // // // newString = newString.replaceAll("a","x")

// // // // console.log(newString)

// // // // let str1 = "this is 1"
// // // // let str2 = "this is 1"

// // // // // console.log(str1.match(str2))

// // // // if(str1 == str2){
// // // //     console.log(true)
// // // // }else{
// // // //     console.log(false)
// // // // }

// // // // replace single char only, regular exp, match case

// // // // wap to extract first name middle name and last name from a string, take user input format FIRSTNAME MiDDLENAME LASTNAME

// // // // let fullName = window.prompt("Enter Name in First Middle Last")

// // // // if (fullName) {

// // // //     // check the string if it is in format or not
// // // //     // to deal with this problem we have to count the number of spaces in the string i.e. spaces has to count 2 

// // // //     let count = 0;

// // // //     let pointer = 0

// // // //     while (pointer < fullName.length) {

// // // //         if (fullName.charAt(pointer) == " ") {
// // // //             // count = count + 1
// // // //             count++
// // // //         }

// // // //         pointer++

// // // //     }

// // // //     console.log(count)

// // // //     if (count === 2) {

// // // //         fullName = fullName.trim()

// // // //         let fn, mn, ln

// // // //         console.log(fullName)
// // // //         console.log(fullName.length)

// // // //         fn = fullName.slice(0, fullName.indexOf(" "))

// // // //         mn = fullName.slice(fullName.indexOf(" "), fullName.lastIndexOf(" "))

// // // //         ln = fullName.slice(fullName.lastIndexOf(" "), fullName.length)

// // // //         console.log(`First Name is ${fn} , Middle name is ${mn} and Last name is ${ln}`)
// // // //     } else {
// // // //         console.log("Invalid String Write in First space Middle space Last format  !")
// // // //     }
// // // // } else {
// // // //     console.log("Invalid String !")
// // // // }

// // // // looping statements
// // // // while, do while, for,[ forEach , for of, map, filter ] , for in object

// // // // syntax for while loop

// // // // while(condition){
// // // //     statment
// // // //     updation in condition
// // // // }

// // // // let a = 0

// // // // while (a <= 10) {
// // // //     console.log(a)
// // // //     a++
// // // // }

// // // // let a = 10

// // // // while (a >= 0) {
// // // //     console.log(a)
// // // //     a--
// // // // }

// // // // find the count of "a" in this string

// // // // let string = "aabacadaea"

// // // // let count = 0;

// // // // let pointer = 0

// // // // while (pointer < string.length) {

// // // //     if (string.charAt(pointer) == "a") {
// // // //         // count = count + 1
// // // //         count++
// // // //     }

// // // //     pointer++

// // // // }

// // // // console.log(count)

// // // // find odd and even number from 0 to 1000

// // // // let number = 0

// // // // while (number <= 1000) {

// // // //     if(number % 2 == 0){
// // // //         // console.log(`Number ${number} is even !`)
// // // //         console.log("Number "+number+ " is even !")
// // // //     }else{
// // // //         console.log(`Number ${number} is odd !`)
// // // //     }

// // // //     number ++

// // // // }


// // // // factorials, 5 = 5*4*3*2*1 = 120

// // // // wap in to find factorials for numbers

// // // // let number = 55;

// // // // let org = number

// // // // let fact = 1

// // // // while(number != 0){

// // // //     fact = fact * number //5 , 20 , 60 , 120 , 120

// // // //     number--

// // // // }

// // // // console.log(`factorial of ${org} is ${fact} !`)


// // // // wap in js to reverse a numbers
// // // // let num = 123 //6452
// // // // let org = num
// // // // let rev = 0
// // // // let d;

// // // // while(num != 0){
// // // //     d = num % 10

// // // //     rev = rev * 10 + d

// // // //     num = parseInt(num / 10)
// // // // }

// // // // console.log(`reverse of ${org} is ${rev}`)

// // // // palindrome numbers/strings

// // // // let num = 121 //6452
// // // // let org = num
// // // // let rev = 0
// // // // let d;

// // // // while(num != 0){
// // // //     d = num % 10

// // // //     rev = rev * 10 + d

// // // //     num = parseInt(num / 10)
// // // // }

// // // // console.log(rev)

// // // // if(org == rev){
// // // //     console.log(`${org} is a palindrome !`)
// // // // }else{
// // // //     console.log(`${org} is not a palindrome !`)
// // // // }

// // // // sum of digits

// // // // let num = 19
// // // // let org = num

// // // // let d;
// // // // let sum = 0

// // // // while(num != 0){

// // // //     d = num % 10

// // // //     sum = sum + d 

// // // //     num = parseInt(num/10)

// // // // }

// // // // console.log(`The sum of digits of ${org} is ${sum} !`)

// // // // armstrong number, sum of digits (with power of numbers of digits) is equal to orgnial number
// // // // 123 = 1*1*1 + 2*2*2 + 3*3*3 = 1 + 8 + 27 = 36 not a armstrong number
// // // // 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153 it os armstrong number

// // // // let num = 1634

// // // // let org = num
// // // // let d
// // // // let sum = 0

// // // // while(num != 0){

// // // //     d = num % 10

// // // //     sum = sum + (d*d*d*d)

// // // //     num = parseInt(num/10)

// // // // }

// // // // console.log(sum)

// // // // if(org == sum){
// // // //     console.log(`${org} is a armstrong number !`)
// // // // }else{
// // // //     console.log(`${org} is not a armstrong number !`)
// // // // }

// // // // wap to find numbers of digits in a number

// // // // let num = 12346857434354665456

// // // // let d;

// // // // let digits = 0

// // // // while (num !=0 ) {

// // // //     d = num % 10

// // // //     if (d) {
// // // //         digits++
// // // //     }

// // // //     num =  parseInt(num / 10)

// // // // }

// // // // console.log(digits)

// // // // wap to find wheater a any number is armstrong or not 

// // // let num = 4679307774

// // // let org = num

// // // let digits = 0

// // // let d

// // // let sum = 0

// // // while (num != 0) {
// // //     d = num % 10

// // //     if (d) {
// // //         digits++
// // //     }

// // //     num = parseInt(num / 10)
// // // }

// // // console.log(`${org} has ${digits} digits !`)

// // // num = org 

// // // // num = org reset with original value , because num become 0 after first loop

// // // // console.log(num)

// // // while(num != 0){

// // //     d = num % 10

// // //     sum = sum + Math.pow(d,digits)

// // //     num = parseInt(num/10)

// // // }

// // // console.log(sum)

// // // if(org == sum){
// // //     console.log(`${org} is a armstrong number !`)
// // // }else{
// // //     console.log(`${org} is not a armstrong number !`)
// // // }


// // // wap a program to make reverse of a string

// // // let str = "aba" // lla

// // // let char = ""

// // // let rev_str = ""

// // // let pointer = str.length - 1 // 3 , 2 , 1 , 0 , (-1 false condition)

// // // while (pointer >= 0) {

// // //     char = str.charAt(pointer) //t

// // //     // console.log(char)

// // //     rev_str = rev_str.concat(char)
// // //     // ""+"g" = "g" + "n" = "gn" + "i" = "gni" + "r" = "gnir" + "t" = "gnirt" + "s" = "gnirts"

// // //     pointer--

// // // }

// // // // console.log(rev_str)

// // // console.log(`Reverse of ${str} is ${rev_str}`)

// // // if (str === rev_str) {
// // //     console.log(`string ${str} is a palindrome ! `)
// // // }else{
// // //     console.log(`string ${str} is not a palindrome ! `)
// // // }

// // // nasted loops to iterate multi demensional arrays

// // // [[1,2,3],[4,5,6],[7,8,9]]

// // // wap to make a multiplication table

// // // make this from 1 to 10

// // // 2 * 1 = 2
// // // 2 * 2 = 4
// // // 2 * 3 = 6
// // // 2 * 4 = 8
// // // 2 * 5 = 10
// // // 2 * 6 = 12
// // // 2 * 7 = 14
// // // 2 * 8 = 16
// // // 2 * 9 = 18
// // // 2 * 10 = 20

// // // write a nasted loop for this

// // // let table_no = 1

// // // while (table_no <= 100) {

// // //     let num = table_no

// // //     let counter = 1

// // //     while (counter <= 10) {

// // //         console.log(`${num} * ${counter} = ${num * counter} `)

// // //         counter++

// // //     }

// // //     table_no ++

// // //     console.log("------------------------")

// // // }

// // // do while loop
// // // syntac for do while loop

// // // do{
// // //     // statments 
// // //     // updation
// // // }while(condition)

// // // wap to take user input as year then check if leap year, ask again to enter year if continues.

// // // let chooice = "no"

// // // do{

// // //     let year = Number(prompt("Enter Any Year !"))

// // //     if( (year % 4 == 0) || ((year %100 == 0) &&  (year % 400 == 0) ) ){
// // //         console.log(`${year} is a leap year !`)
// // //     }else{
// // //         console.log(`${year} is not a leap year !`)
// // //     }

// // //     chooice = prompt("do you wish to continue ? yes/no(kuch bhi )")

// // // }while( chooice == "yes" )

// // // make replace all function to replace single element
// // // some edits

// // // let a = 10

// // // do {
// // //     console.log(a)
// // //     a++
// // // } while (a <= 5)

// // // for loop

// // // syntax : for loop 

// // // for(initize ; condition ; updation ){
// // //     // statement
// // // }

// // // wap to print 1 - 1000 even numbers

// // // for(let num = 0 ; num < 500 ; num++){
// // //     if(num % 2 == 0){
// // //         console.log(num)
// // //     }
// // // }

// // // let num = 0

// // // while(num <= 1000){
// // //     console.log(num)
// // //     num++
// // // }

// // // ARRAY 

// // // collection of elements stored in continue memory location 

// // // syntac for creating a array

// // // let numbers = [1,2,3,4,6,7,8,9,10,11]

// // // js has dynamic array 

// // // let array = [true, 1234 , "strign" , {} , [] ]

// // // js allots 10 memory location for a array 

// // // 1001,1002,1003,1004,1005,1006,1007,1008,1009,1010

// // // new length = length * 1.5
// // // = 10 * 1.5
// // // = 15 * 1.5

// // // int array[10] = [1,1,+]

// // // FIFO (First In - First Out) (horizontally stacked)

// // // let nums = [1,2,3,4,5] 

// // // length = 5
// // // indexes = 5 (0,1,2,3,4)

// // // indexed data mai add and remove slow hota hai 

// // // searching, sorting, look up 
// // // to add or to remove

// // // array and it's oprations

// // // let names = ["amey" , "om" , "yash" ]

// // // console.log(names)

// // // // names[index]
// // // console.log(names[0])

// // // // names of index
// // // names[0] = "xyz"
// // // names[1] = "abc"

// // // console.log(names)

// // // let nums = ["amey",2,3,4,5,6,7,8,9]

// // // array.length
// // // console.log(nums.length)

// // // how to access an element at certain index in an array

// // // array[index] re-assignment, replace, swap 

// // // nums[0] = "om"

// // // console.log(nums[0])

// // // how to iterate a array using for loop / while loop 


// // // console.log(nums)

// // // for(let i = 0 ; i <= nums.length ; i++){
// // //     console.log(nums[i])
// // // }

// // // nums[9] array index out of bound 

// // // let i = 0

// // // while(i < nums.length){

// // //     console.log(nums[i])

// // //     i++
// // // }

// // // methods

// // // let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// // // numbers[0] = 1000 //re-assignment

// // // to add elements from trailing part of a array

// // // array.push(element)

// // // console.log(numbers.length)
// // // console.log(numbers)

// // // numbers.push(15)

// // // console.log(numbers.length)
// // // console.log(numbers)

// // // numbers.push("amey khondekar")

// // // console.log(numbers.length)
// // // console.log(numbers)

// // // // to add element from leading part 
// // // // array.unshift(element)

// // // numbers.unshift("new element")

// // // console.log(numbers.length)
// // // console.log(numbers)

// // // to remove element from trailing 
// // // array.pop()

// // // numbers.pop()
// // // numbers.pop()
// // // numbers.pop()
// // // numbers.pop()
// // // numbers.pop()

// // // console.log(numbers.length)
// // // console.log(numbers)


// // // // to remove element from leading 
// // // // array.shift()

// // // numbers.shift()
// // // numbers.shift()
// // // numbers.shift()
// // // numbers.shift()
// // // numbers.shift()

// // // console.log(numbers.length)
// // // console.log(numbers)

// // // to insert or remove element from any index in an array
// // // array.splice(finding index, delete count, new element) 

// // let names = ["amey","om","yash","mrunal"]

// // // console.log("initial")
// // // console.log(names)

// // // names.splice(2,0,"piyush")

// // // console.log("updated")
// // // console.log(names)

// // let newNames = names.slice(0,2)

// // console.log(newNames)

// // console.log(names)

// // 2-D array i.e. a array with multiple rows and columns (matrix)

// // let num1 = [1, 2, 3]
// // let num2 = [4, 5, 6]

// // let nums = [
// //     num1, num2
// // ]

// // // console.log(nums)

// // // to itetrate a 2-D array use nasted for loop

// // for( let i = 0 ; i < nums.length ; i++ ){
// //     // this will loop through rows 
// //     for(let j = 0 ;j < nums[i].length ; j++){
// //     // this will loop through columns    
// //         console.log( nums[i][j] )
// //     }
// // }

// // function , builtin classes(math, date)

// // algorithms : linear-search, binary-search, bubble sort


// // functions in js 
// // to create a custom function

// // their are 2 syntax to write a function
// // function has 4 types
// // we can create a function with no name

// // using function keyword 
// // ES6 Module function | arrow function | fat arrow function

// // to make a function work we have to call it 
// // syntax : functionName(optional)

// // let a = 10
// // let b = 20

// // console.log(a+b)

// // let x = 20
// // let y = 20

// // console.log(x+y)

// // using function keyword

// // function functionName(optional) {
// //     // function body
// //     // return return statement optional
// // }

// // functionName(optional)

// // function greet(){
// //     console.log("hello this is greet function !")
// // }

// // greet()

// // let i = 1

// // while(i <= 10){
// //     greet()
// //     i++
// // }

// // using arrow function

// // scope functionName = (optional) => {
// //     // function body
// //     // return return statement optional
// // }

// // let greet = () =>{
// //     console.log("hello this is greet function using arrow syntax !")
// // }

// // greet()
// // greet()
// // greet()
// // greet()
// // greet()

// // 4 types of functions

// // 1. no args and no return
// // 2. args but no return
// // 3. args and return
// // 3. no args but return

// // using function 

// // no args and no return

// // function sum(){
// //     console.log(10+20)
// // }

// // sum()

// // args but no return
// // parameters 

// // function sum(a,b){
// //    console.log(a+b)
// // }

// // sum(100,50)

// // args and return 
// // we have return statements

// // function sum(a, b) {
// //     return a+b
// // }

// // console.log(sum(10,30))

// // let addition = sum(50,40)

// // console.log(addition)

// // no args but return

// // function greet(){
// //     return "hello Bhai !"
// // }

// // console.log(greet())

// // // into arrow function

// // math class in js
// // we are going access properties and methods from a math class in js 

// // .toFixed(points)

// // console.log(Math.PI)

// // function areaOfCircle(radius){
// //     let area = Math.PI * Math.pow(radius,2)
// //     return `${area.toFixed(2)} sq.cm.`
// // }

// // console.log(areaOfCircle(5))
// // console.log(areaOfCircle(10))

// // console.log(Math.SQRT2)
// // console.log(Math.LOG10E)
// // console.log(Math.LOG2E)
// // console.log(Math.SQRT1_2)
// // console.log(Math.E)

// // // methods

// // let a = Math.pow(3,10) //return || args and return

// // console.log(a)

// // // 64 sq root 8

// // console.log(Math.sqrt(144))

// // console.log(Math.cbrt(125))

// // let maxnumber = Math.max(10,55,12,1,77,102,3)
// // let minnumber = Math.min(10,55,12,1,77,102,3)

// // console.log(maxnumber)
// // console.log(minnumber)

// // let nums = [1,2,3,4,5,6,7,8,9]

// // // push(), unshift()
// // // splice(index,deletecount,new element)

// // // nums.splice(2,0,99999)

// // // console.log(nums)

// // // let newNums = nums.slice(startindex, endingindex)
// // let newNums= nums.slice(0,3)

// // console.log(newNums)

// // maths class methods

// // Math built in class
// // properties / methods
// // PI, sqrt_2 , sqrt_1_2

// // console.log(Math.pow(2,10))

// // console.log(Math.sqrt(64))
// // console.log(Math.cbrt(27))

// // let a = 11;
// // let b = 20
// // let c = 40
// // let d = 88
// // let e = 105
// // console.log( Math.min(a,b,c,d,e))
// // console.log( Math.max(a,b,c,d,e))

// // let a = 10.57899886652

// // a = a.toFixed(6)

// // console.log(a)

// // random numbers
// //  1 - 6
// // console.log((Math.random() * 6 + 1).toFixed(0))

// // genrate random otp

// // 4 digits

// // let otp;

// // otp = ( Math.random() * 999999 ).toFixed(0)

// // console.log(otp)
// // console.log(typeof(otp))

// // if(otp.length <= 6){
// //     console.log(otp)
// //     console.log(typeof(otp))
// // }


// // roundof value > 0.5 = 1
// // value < 0.5 = 0

// // let value = 5.000000000000001
// // // value = Math.round(value)

// // // value = Math.floor(value)

// // value = Math.ceil(value)

// // console.log(value)

// // Date class is a built in class in js
// // setDate , getDate

// // to use date class we need a date object

// // const date = new Date("2020-05-12T23:50:21.817Z");

// // new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

// let date = new Date("2020",4,1,10,0,0,0)

// // setter and getter function 

// // date.setDate(2)
// // date.setMonth(0)
// // date.setHours(0)
// // date.setMinutes(0)
// // date.setSeconds(0)

// console.log(date.toLocaleDateString())

// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.toTimeString())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// write a arrow function for no args but return

// let greet = () =>{

//     // function body

//     return "Hello"

// }

// console.log(greet())
// console.log(greet())
// console.log(greet())
// console.log(greet())
// console.log(greet())


// wap a function to calculate area of circle in sq.cm

// function areaOfCircle(radius){

//     let area = (Math.PI * Math.pow(radius,2)).toFixed(2)

//     return `Area of circle with radius ${radius} cm is ${area} sq.cm`
// }

// console.log(areaOfCircle(10))

// function findArea( lengh, width ){
//     return `area of shape with length ${lengh} cm and width ${width} cm is ${width * lengh}`
// }

// console.log(findArea(2,2))

// method overloading

// // wap to make sum of numbers function

// function sumOfNumber(a,b){
//     alert("1")
//     return a+b
// }

// function sumOfNumber(a,b,c){
//     alert("2")
//     return a+b+c
// }

// function sumOfNumber(a,b,c,d){
//     alert("3")
//     return a+b+c+d
// }

// function sumOfNumber(a,b,c,d,e){
//     alert("4")
//     return a+b+c+d+e
// }

// function sumOfNumber(a,b,c,d,e,f){
//     alert("5")
//     return a+b+c+d+e+f
// }

// console.log(sumOfNumber(10,20))

// complete using OOP's

// javascripts objects 

// scope name = { key:value , key2:value2,.,.,.,.,.,. }

// let student = {
//     name : 'amey',
//     class: 'FSD-5PM',
//     roll: 5,
//     regular : true
// }

// console.log(student.name)
// console.log(student.roll)
// console.log(student.regular)


// let student = {
//     name: {
//         firstName :"Amey",
//         middleName : "Anil",
//         lastName : "Khondekar"
//     },
//     roll: 1 ,
//     class : "fsd5PM"
// }

// console.log(student.name.firstName)
// console.log(student.name.middleName)
// console.log(student.name.lastName)

// use for in to make object (key) itration 

// let student = {
//     name : "amey",
//     roll : 1,
//     class : "FSD5PM",
//     address : "nagpur",
//     contact : 9766696550,
//     id : "A123" 
// }

// for in loop is special and reserved for objects only


// for (let key in object){

// }

//[name, roll , class , address , contact , id] = ["amey",1,"FSD5PM","nagpur",9766696550,"A123"]

// name
// roll

// for( let key in student ){
//     // console.log(key)
//     console.log(student[key])
//     // console.log( ` ${key} = ${student[key]} ` )
//     // console.log(student)
// }

// let nums = [1,2,3,4]

// let [a,b,c,d] = [1,6876464,3,4]

// console.log(a)
// console.log(b)
// console.log(a)
// console.log(b)

// let user = {
//     name: "yash",
//     phone: 9766696550,
//     address: "nagpur",
//     email: "ameykhondekar01@gmail.com",
//     password: "password123"
// }

// // console.log(user.name)

// let { name , phone , password } = user 

// console.log(name)
// console.log(phone)
// console.log(password)


// linear search, bubble sort  

// let nums = [1,2,45,56,8,9,6,32,326]

// let Search = 800

// let pointer , flag = false

// // if(name == "jayesh"){
// //     flag = true
// // }