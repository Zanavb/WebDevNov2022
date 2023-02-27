const obj1 = {
    number1: 3,
    number2: 4
}

const obj2 = {
    number1: 5,
    number2: 6
}

const obj3 = {
    a: 7,
    b: 8
}
function GetSumOfNumbers(){
    console.log(this.number1 + this.number2)
    console.log(this.a + this.b, this)
}

GetSumOfNumbers.call(obj3)

const getBindMethodResult = GetSumOfNumbers.bind({a:1, b:2, c:3})
console.log(getBindMethodResult())

const student = {
    fullname: 'Neo',
    // no arrowfuntion, it doesn't work
    PrintInfo:function(){
        return this.fullname
    }
}

const result = student.PrintInfo.bind({fullname:'Trinity'})

console.log(result())