const car = {
    color:'black',
    model: 'bmw 2012',
    energy: 'benzine',
}

console.log(car);

car.smart=false;
car.energy='diesel';
car.customers=['a','b','c','d']

car.customers[0] = 'f'


const me = {
    haircolor: 'brown',
    bodytype: 'skinny',
    mood: 'depressed',
    status: 'single',
}

console.log(me);

const myInfo = {
    name: 'Zana',
    age: '26',
    show:function(){
        console.log(`Name: ${this.name}\nAge: ${this.age}`);
    }
}

myInfo.show()