
const speedCar = (distance, time) => {
    const speed = distance/time;
    
    return speed;
}

const MyCar = speedCar(150, 2);
console.log(MyCar);