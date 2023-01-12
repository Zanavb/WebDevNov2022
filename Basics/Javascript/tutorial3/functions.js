// const output = document.getElementById('output')

// function Add() {
//     return 'Test value'
// }

// function AddMessage() {
//     console.log('This is test value')
// }

// console.log(Add())
// const result = Add()
// console.log(result)
// AddMessage()

// output.innerHTML='<h1>Hello</h1>'


// function AddMessageInToDocument(message,message2){
//     output.innerHTML+=`<h1>${message}</h1>`
//     output.innerHTML+=`<h1>${message2}</h1>`
// }

// AddMessageInToDocument('TWITTER','INSTAGRAM')

// let myname = "micro"
// myname+= "soft"
// console.log(myname)

function CreateAccount(username,password,email,role){
    const obj = {
        user:username,
        pass:password,
        email:email,
        app_role:role
    }
    return obj
}

console.log(CreateAccount('root','asd123','root@microsotf.com','sudo'));
const user1 = CreateAccount('root','asd123','root@microsotf.com','sudo')
console.log(user1)