// // // // // alert("hello from script js!")

// // // // // variables
// // // // // scope name = value;

// // // // // comment in js

// // // // /*
// // // // this
// // // // is
// // // // multi
// // // // line 
// // // // commet
// // // // */

// // // // // let a = "10"
// // // // // let b = 10
// // // // // let c = 30

// // // // // oprators

// // // // // 1. Airhtmatics + - / * %
// // // // // 2. increement and decreement ++ , -- (pre,post)
// // // // // 3. Assignment =
// // // // // 4. Conditional/Comparision Oprators < , > , <= , >= , != , == , ===
// // // // // 5. (Logics gates) Logical Oprators &&(AND) , ||(OR) , !(NOT) 
// // // // // 6. Bitwise oprators & , ||
// // // // // 7. Dot notation ' . '

// // // // // opration

// // // // // () , [] , {}

// // // // // data types in js
// // // // // 1)primitve , 2)non-primitve

// // // // // 1)  Number (integers, floats, double) (1,1.0,1.514) , String (group of charchters ,a string has to be writing in qoutes "" , '' , `` back ticks ), Boolean (true, false)

// // // // // undefined (trying to access before ), null

// // // // // 2) Array, objects, function
// // // // // NaN (not a number)

// // // // // let z = null

// // // // let a = 30
// // // // let b = "amey"
// // // // let c = false

// // // // let d = [1,2,3,4]
// // // // let e = {
// // // //     name: "name 1"
// // // // }

// // // // let f = () =>{
// // // //     console.log('hello')
// // // // }

// // // // let g;

// // // // let h = null

// // // // let i = Number("a1")

// // // // console.log(typeof(a))
// // // // console.log(typeof(b))
// // // // console.log(typeof(c))
// // // // console.log(typeof(d))
// // // // console.log(typeof(e))
// // // // console.log(typeof(f))
// // // // console.log(typeof(g))
// // // // console.log(typeof(h))
// // // // console.log(i)

// // // // output and input function

// // // // built-in (jo js mai hai)  function output function
// // // // console.log() , window.alert() , document.write()

// // // // they accept any data string, number, boolean

// // // // console.log("hello world !")
// // // // console.log("hello world  2 !")

// // // // console.warn("this is warning !")
// // // // console.error("this is warning !")
// // // // console.info("this is warning !")
// // // // console.table([1,2,3])

// // // // window.alert("hello !")

// // // // document.write("this is something !") // document means html docs

// // // // built-in input function

// // // let data = window.prompt("")
// // // // prompt function will also returns us a string 
// // // console.log(data)
// // // console.log(typeof(data))


// // // // type casting changing the data type of a certain data

// // // // Number -> String 
// // // // String -> Number(conditions applied)
// // // // Number -> Boolean
// // // // Boolean -> Number
// // // // Boolean -> String
// // // // String -> Boolean

// // // // using function keyword/normal function
// // // // function doSomething () {

// // // // }

// // // // ES6 Module/Arrow Function/Call Back
// // // // let doSomething = () =>{

// // // // }

// // // type casting

// // // let data = 1

// // // console.log("before casting")
// // // console.log(typeof(data))
// // // console.log(data)

// // // // number ->  string
// // // // number ->  boolean

// // // // re-assignment
// // // data = String(data)
// // // console.log("after casting")
// // // console.log(typeof(data))
// // // console.log(data)


// // // data = Boolean(data)
// // // console.log("after casting")
// // // console.log(typeof(data))

// // // // if value exists then true else false

// // // console.log(data)


// // // let data = ""

// // // console.log("before casting")
// // // console.log(typeof(data))
// // // console.log(data)

// // // // string ->  number
// // // // string ->  boolean

// // // // re-assignment
// // // // data = Number(data)
// // // // console.log("after casting")
// // // // console.log(typeof(data))
// // // // console.log(data)

// // // // wheneven we try to cast a alpha numeric strings to number we will also get NaN(Not a Number)


// // // data = Boolean(data)
// // // console.log("after casting")
// // // console.log(typeof(data))

// // // // if value exists then true else false

// // // console.log(data)

// // let data = false

// // console.log("before casting")
// // console.log(typeof(data))
// // console.log(data)

// // // boolean ->  number
// // // boolean ->  string

// // // re-assignment
// // // data = Number(data)
// // // console.log("after casting")
// // // console.log(typeof(data))
// // // console.log(data)

// // // if value is true then number casting becomes 1
// // // if value is false then number casting becomes 0

// // data = String(data)
// // console.log("after casting")
// // console.log(typeof(data))

// // // if value exists then true else false

// // // false - boolean
// // // "false" - string

// // console.log(data)

// // // functions involved in casting 

// // Number(data)(this function casts to number) , String(data), Boolean(data)

// // hoisting in javascript
// // default thing in js that it hoist the declaration part above all the scopes

// // console.log(x) 
// // console.log will give undefined because only let x is rised above
// // var x = 5

// // ++(+1), --(-1) | pre , post  

// // let x = 10

// // console.log(x++)
// // console.log(x)
// // console.log(x)

// // console.log(++x)
// // console.log(x)
// // console.log(x)

// // console.log(x--)
// // console.log(x)
// // console.log(x)

// // console.log(--x)
// // console.log(x)
// // console.log(x)

// // airthmatics + , - , * , / , %

// // let a = 10
// // let b = 20

// // let c = a + b
// // console.log(c)

// // c = a - b
// // console.log(c)

// // c = a * b
// // console.log(c)

// // c = a / b
// // console.log(c)

// // c = a % b
// // console.log(c)

// // a += b
// // a = a + b
// // a -= b
// // a *= b
// // a /= b
// // a %= b 
// // a = a % b
// // console.log(a)

// // string concatation
// // joining string with variables, number, another string

// // let name = "om"
// // let age = 12
// // console.log("hello my name is " + name + ", my age is " + age)

// // document.write("hello my name is " + name + ", my age is " + age)

// // window.alert("hello my name is " + name + ", my age is " + age)

// // window.prompt("hello my name is " + name + ", my age is " + age)

// // string + string = string 

// // string + number = string 

// // number + string = string

// // number + number = number

// // console.log(5+5)
// // console.log("5"+"5")
// // console.log("5"+5)
// // console.log(5+"5")

// let num1 = window.prompt("Enter Number 1")
// console.log(typeof(num1))

// num1 = Number(num1)

// console.log(typeof(num1))


// // let num2 = window.prompt("Enter Number 2")
// // console.log(typeof(num2))

// // num2 = Number(num2)

// // console.log(typeof(num2))

// let num2 = Number(window.prompt("Enter Number 2"))
// console.log(typeof(num2))

// console.log(num1 + num2)

// ES6 - template litrals

// let name = "amey"

// let age = "21"

// console.log(`hello my name is ${name}, my age is ${age} `)