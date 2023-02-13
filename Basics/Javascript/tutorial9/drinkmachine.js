// snack machine

const options = {
    drink: [
        { name: 'cola', price: 1.0 },
        { name: 'fanta', price: 1.3 },
        { name: 'sprite', price: 1.2 },
        { name: 'water', price: 1.0 },
        { name: 'coffee', price: 2.3 },
        { name: 'tea', price: 2.4 },
    ],
    fastfood: [
        { name: 'hamburger', price: 4.0, label: 'halal' },
        { name: 'cheeseburger', price: 4.3, label: 'non-halal' },
        { name: 'hotdog', price: 3.5, label: 'halal' },
        { name: 'fries', price: 4.3, label: 'non-halal' },
        { name: 'chicken nuggets', price: 5.0, label: 'halal' },
    ],
    sauces: [
        { name: 'ketchup', price: 0.4 },
        { name: 'mayonnaise', price: 0.4 },
        { name: 'mustard', price: 0.5 },
        { name: 'bbq', price: 0.6 },
        { name: 'garlic', price: 0.6 },
        { name: 'hot sauce', price: 0.6 },
    ]
}

// Create MakeOrder function that takes 3 parameters: drink, fastfood, sauces and returns the total price of the order

// Create displayOrder function that displays the order in the console

// Expected output: You ordered a cola, hamburger with ketchup and the total is 4.5 euro

// create a function that can display halal food or non halal food

function MakeOrder(drink, food, sauce) {
    let total_price=0;
    // return an object with customer's order
    console.log(drink, food, sauce)
    
    let drink_price = options.drink.find(function (product) {
        return product.name === drink
    })

    total_price+=drink_price.price

    let food_price = options.fastfood.find(function (product) {
        return product.name === food
    })

    total_price+=food_price.price

    let sauce_price = options.sauces.find(function (product) {
        return product.name === sauce
    })

    total_price+=sauce_price.price

  //  console.log(drink_price,food_price,sauce_price)
    const obj = {
        drink:drink,
        food:food,
        sauce:sauce,
        total_price:total_price
    }
    /*
    {
        drink:'cola',
        food:'fries',
        sauce:'ketchup',
        total_price:4.5
    }
    */
  // console.log(obj)
    return obj
}




function displayOrder(order) {
    // You ordered a cola, hamburger with ketchup and the total is 4.5 euro
    console.log(`You ordered a ${order.drink}, ${order.food} with ${order.sauce} and the total is ${order.total_price} euro`)
}

let order = MakeOrder('cola', 'fries', 'ketchup') // this function returns an object with product names and total_price

displayOrder(order)

function ListOfHalalFood(term) {
    // display halal food out
    // hint: filter
    return options.fastfood.filter(product=>product.label===term)
}

console.log(ListOfHalalFood('non-halal'))