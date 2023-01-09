// const car = {
//     color:'black',
//     model:'bmw 2012',
//     energy:"benzine",
// }

// car.smart=false;
// car.energy="diesel"
// car.customers=['a','b','c','d']

// car.customers[0] = 'f'

// car.showInfo = function(){
//     console.log('Hello world',this.color)
// }

// console.log(car)
// console.table(car)
// car.showInfo()



// const myInfo = {
//     name:'Atilla',
//     age:32,
//    show:function  myfunction(){

//    }
// }

// myInfo.show()

// const me={
//     color:'black',
//     show:function(){
//         console.log('hello world', this.color)
//     }
// }

// me.show()

// Anonymous function
/*

function(){

}

*/

/*
Regular function

*/

const myPersonalInfo = {
    fullname : "John Doe",
    age: 32,
    email:'john@john.com',
    hobbies:['read','play games'],
    social_links:['codepen','github'],
    showMyInfo:function(){
        console.log(`Fullname: ${this.fullname}\nAge: ${this.age}\nEmail: ${this.email}\nHobbies: ${this.hobbies[0],this.hobbies[1]}\nSOcial Links: ${this.social_links[0]}`)
    }
}

myPersonalInfo.showMyInfo()