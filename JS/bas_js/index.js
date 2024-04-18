// let a = 50
// let b = 0

// console.log(a/b)
// abc 10
// try catch block

let a = 50
let b = 0

try{

    if(b === 0){
        throw("division by 0 is not possible !")
    }

    console.log(a/b)
 
}catch(err){
    console.log("some error/exception occured " +err)
}



console.log()