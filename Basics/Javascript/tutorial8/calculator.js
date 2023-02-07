const calculator = {
    sum: function (number1, number2) {
        sum = number1 + number2;
        return sum
    },
    distract: function (number1, number2) {
        distract = number1 - number2;
        return distract
    },
    multiply: function (number1, number2) {
        multiply = number1 * number2;
        return multiply
    },
    divide: function (number1, number2) {
        divide = number1 / number2;
        return divide
    }
}

console.log(calculator.distract(5,2));
console.log(calculator.sum(4,32));
console.log(calculator.divide(24,4));

const Drone = {
    runEngine: () => console.log('Drone engine has been started...'),
    fly: direction => console.log(`Drone is flying ${direction}`),
    flyTo: coordinate => console.log(`Drone is flying to ${coordinate}`),
    takePhoto: () => console.log('Photo captured'),
    returnBase: () => console.log('Drone is going back to base...')
 }

 const Joystick = (keypress, location, direction) => {
    switch(keypress){
        case 'start':
            Drone.runEngine();
            break
        case 'fly':
            Drone.fly(direction);
            break
        case 'flyTo':
            Drone.flyTo(location);
            break
        case 'takePhoto':
            Drone.takePhoto();
            break
        case 'returnBase':
            Drone.returnBase();
            break
    }
 }

 Joystick('fly','', 'left' )
