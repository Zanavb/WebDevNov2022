// Brick Calculator - How Many Bricks Do You Need?
// Hoeveel bakstenen heeft u nodig?
 
// 1. Create a function that takes the width, height returns the area of a wall.
// 1. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een muur.
 
// 2. Create a function that takes the width, height returns the area of a single brick.
// 2. Maak een functie die de breedte, hoogte teruggeeft van de oppervlakte van een enkele baksteen.
 
// 3. Create a function that takes wall area and brick area depending on the brick type and returns the number of bricks required.
// 3. Maak een functie die de oppervlakte van de muur en de oppervlakte van de baksteen afhankelijk van het baksteen type teruggeeft en het aantal benodigde bakstenen.

const BrickTypes = {
    standardhousebrick: [0.265, 0.065], // meter
    standardblock: [0.44, 0.215], // meter
}

function WallArea(width, height) {
    return width * height // return area of a wall
}

function BrickSize(width, height) {
    return width * height
}

console.log(WallArea(10, 10));
console.log(BrickSize(BrickTypes.standardblock[0], BrickTypes.standardblock[1]))
console.log(WallArea(10, 10) / BrickSize(BrickTypes.standardhousebrick[0], BrickTypes.standardhousebrick[1]))



function CalculateNumberOfBricks(WallArea, BrickType) {
    let result=""
    switch (BrickType) {
        case 'standardhousebrick': // NumberofBricks = 100 / 0.096
            result = `The number of bricks you need is ${WallArea/BrickSize(BrickTypes.standardhousebrick[0],BrickTypes.standardhousebrick[1])}`
            console.log(result)
            break;
        case 'standardblock':
            result = `The number of bricks you need is ${WallArea/BrickSize(BrickTypes.standardblock[0],BrickTypes.standardblock[1])}`
            console.log(result)
            break;
        default:
            console.log('Please enter brick type');
    }
}

// let getAreaofWall  = WallArea(10,10)

CalculateNumberOfBricks(WallArea(10,10),'standardhousebrick')

BrickTypes.standardhousebrick[0]
BrickTypes.standardhousebrick[1]


const BrickCalculator = {
    WallArea:function(width,height) {
        return width * height;
    },
    NumberOfBricks:function(wallArea, brickType) {
        if(brickType === 'standardhousebrick'){
            const result = wallArea/BrickTypes.standardhousebrick[0]*BrickTypes.standardhousebrick[1]
            console.log(result)
        }
        if(brickType === 'standardblock') {
            const result = wallArea/BrickTypes.standardblock[0]*BrickTypes.standardblock[1]
            console.log(result)
        }
        if(brickType != 'standardhousebrick' && brickType != 'standardblock') {
            console.log("Brick type is incorrect or you haven't given any type")
        }
        
    }
}

let getWallArea = BrickCalculator.WallArea(5,4);
BrickCalculator.NumberOfBricks(getWallArea, 'standardhousebrick');