// add  message
console.log('hello world');

// const variable type

//const username; // syntax error > cannot leave it undefined
const username = "root";
// username = "admin" // TypeError > can not be updated!!!

//const username = "intec" // it can not be re declerate

// let variable type
let password; // no error 
console.log(password)

password = "123" // no error

// let password = "asd123" // SyntaxError

console.log(password)

console.log(username)

var a=1,b=2,c=3,d=4;
var student1,student2,student3,student4
student1 = "Mohammed";
student2 = "Bilal"
student3 = "Ara"
student4 = "Prince"
console.log(a,b,c,d)
console.log(student1,student2,student3,student4)



var USERNAME="atilla" // global scope variable

function ChangeUsername(user){
    const myUsername = user // local scope variable
    return myUsername
}

console.log(ChangeUsername('Ara'))

console.log(USERNAME)