// Javascript operators

// Assignment operator (=)
var name = 'Ahmed';
var age = 25;

// Addition operator (+)
var number1=5;
var number2=6;
var GetSumOfNumbers=number1+number2; // (GetSumOfNumbers = 5+6) => 11
console.log(`Result is ${GetSumOfNumbers}`)
console.log("Result is "+ GetSumOfNumbers)
// ` - ' - "

var firstname = "John";
var lastname = "Doe";
var fullname = firstname + lastname
console.log(fullname)

var n1 = "1"; // string
var n2 = 3; // number 
var result = n1+n2; // 13 
console.log(typeof result)
console.log(result)

var n3 = 5;
var n4 = 5;
var result = n3 * n4;  // 5x5
console.log(result)

// subtraction operator (-)

var n1 = 10;
var n2 = 6;
var result = n2 - n1;
console.log(result); // -4

// + - * /  (bruto/100)*tax

var brutosalary = 3000; // 2370
var tax = 40

var netto = (brutosalary/100)*tax;
console.log(`Tax is ${netto}\nNetto Salary is ${brutosalary-netto}`)


var age = 30;
/* Increment operator (++) */
age++; // increase +1 -- first way
age = age +1 // increase +1 -- second way

/* Decrement operator (--) */
age--;
age = age - 1 // decrease -1

console.log(age)

var firstname = "Michael";
var lastname = "Jackson";

// firstname +=lastname
// var fullname = firstname+lastname; 
// console.log(fullname)

firstname+=lastname; // firstname = firstname + lastname

console.log(firstname)

var n1= 5;
var n2=6;

// var result = n1 + n2;

n1+=n2; // n1 = n1 + n2
console.log(n1)

n1-=n2 // n1 = n1-n2 
n1*=n2 // n1 = n1*n2
n1/=n2 // n1 = n1/n2
// 3*3 = 9 * 3 = 27
