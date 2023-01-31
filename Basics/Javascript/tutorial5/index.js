
const users = [{
    "name": "Corliss Gregol",
    "age": 28,
    "email": "cgregol0@hotmail.com",
    "city": "Brussels",
    "phone": "476-522-4252"
  }, {
    "name": "Chaunce Oldall",
    "age": 33,
    "email": "coldall1@yandex.com",
    "city": "Istanbul",
    "phone": "239-337-6989"
  }, {
    "name": "Bunny Elsay",
    "age": 34,
    "email": "belsay2@yandex.com",
    "city": "Istanbul",
    "phone": "135-299-2469"
  }, {
    "name": "Brewster Archdeckne",
    "age": 39,
    "email": "barchdeckne3@hotmail.com",
    "city": "Gent",
    "phone": "528-427-9095"
  }, {
    "name": "Dodi Deporte",
    "age": 38,
    "email": "ddeporte4@hotmail.com",
    "city": "Brussels",
    "phone": "300-290-8874"
  }, {
    "name": "Rockwell Justun",
    "age": 35,
    "email": "rjustun5@gmail.com",
    "city": "Gent",
    "phone": "642-884-3451"
  }, {
    "name": "Tab Rickword",
    "age": 26,
    "email": "trickword6@yandex.com",
    "city": "Istanbul",
    "phone": "400-264-6149"
  }, {
    "name": "Dianna Gaskal",
    "age": 32,
    "email": "dgaskal7@hotmail.com",
    "city": "Gent",
    "phone": "947-682-1774"
  }, {
    "name": "Stephi Tasseler",
    "age": 24,
    "email": "stasseler8@gmail.com",
    "city": "Brussels",
    "phone": "508-547-5089"
  }, {
    "name": "Leesa Porter",
    "age": 39,
    "email": "lporter9@gmail.com",
    "city": "Gent",
    "phone": "675-250-6171"
  }]

  const findUsersByAge = (age, arraydata) => {
    return arraydata.filter(function(obj){
        return obj.age < age
    }
    )
  }

  console.log(findUsersByAge(25,users));
  
  const findUsersByCity = (city) => {
    return users.filter(function(obj){
        return obj.city === city;
    })
  }

  console.log(findUsersByCity('Gent'));

  const findByEmailDns = (domain) => {
    return users.filter(function(user){
        return user.email.includes(domain)
    })
  }

  console.log(findByEmailDns('yandex'));

  const dice1text = document.getElementById('dice1');
  const dice2text = document.getElementById('dice2');
  const output = document.getElementById('result');
  const winSound = document.getElementById('winSound');
  
function diceRoll(){
    const dice1Random = Math.round(Math.random()*5+1)
    const dice2Random = Math.round(Math.random()*5+1)
     dice1text.innerText=`Dice: ${dice1Random}`;
     dice2text.innerText=`Dice: ${dice2Random}`;

     if (dice1Random > dice2Random) {
        output.innerText="You Win!"
        winSound.play()
    } else {
        output.innerText="Try again!"
    }
}
    


function ClickHandler(){
     diceRoll()
    }