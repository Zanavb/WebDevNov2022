const students = [
    {
        "_id": "63c993feb6f5dc691c2c0ac3",
        "name": "Fannie Buckley",
        "scores": [
            44,
            72,
            37
        ]
    },
    {
        "_id": "63c993fe0b604587275fbfdf",
        "name": "Sherry Petty",
        "scores": [
            50,
            85,
            61
        ]
    },
    {
        "_id": "63c993fef0a0425682c58b2c",
        "name": "Bray Lancaster",
        "scores": [
            37,
            74,
            56
        ]
    },
    {
        "_id": "63c993fe0115dd572cb63892",
        "name": "Hubbard Munoz",
        "scores": [
            99,
            40,
            57
        ]
    },
    {
        "_id": "63c993fe9f8ad8038fc76416",
        "name": "Copeland Ford",
        "scores": [
            66,
            77,
            53
        ]
    },
    {
        "_id": "63c993fef4067267e74d8231",
        "name": "Padilla Bolton",
        "scores": [
            65,
            98,
            39
        ]
    },
    {
        "_id": "63c993fe187dd671983e006d",
        "name": "Mcknight Odonnell",
        "scores": [
            97,
            92,
            40
        ]
    },
    {
        "_id": "63c993fe2ecf8e3dc2bd5393",
        "name": "Bradley Delacruz",
        "scores": [
            57,
            81,
            87
        ]
    },
    {
        "_id": "63c993fefa0735736af48d92",
        "name": "Velazquez Hensley",
        "scores": [
            67,
            45,
            52
        ]
    }
]


// 1. Calculate the average score of sum of all scores for each student [reduce]

students.forEach(function(item){
    console.log(item.scores)
})

const election = [
    {
        person_name:"John",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Michael",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Jimmy",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    },
    {
        person_name:"Michel",
        politic_party1:true,
        politic_party2:false,
        politic_party3:false
    },
    {
        person_name:"Gabriel",
        politic_party1:false,
        politic_party2:false,
        politic_party3:true
    },
    {
        person_name:"Alberto",
        politic_party1:false,
        politic_party2:true,
        politic_party3:false
    }
]

/*

Politic_party1: 
Politic_party2:
Politic_party3:  

*/

let pol1 = 0
let pol2 = 0
let pol3 = 0

election.forEach(politicalScores = (item) => {
//    console.log(item.politic_party1, "policit_party1");
//    console.log(item.politic_party2, "policit_party2");
//    console.log(item.politic_party3, "policit_party3");
    if(item.politic_party1) {
        console.log(`${item.person_name} voted for politic_party1`);
        pol1++
    } else if (item.politic_party2) {
        console.log(`${item.person_name} voted for politic_party2`);
        pol2++
    } else if (item.politic_party3) {
        console.log(`${item.person_name} voted for politic_party3`);
        pol3++
    }
});


console.log(pol1, pol2, pol3);

if (pol1 > pol2 && pol1 > pol3) {
    console.log("Political party 1 has won!");

} else if (pol2 > pol2 && pol2 > pol3) {
    console.log("Political party 2 has won!");

} else if (pol3 > pol1 && pol3 > pol2) {
    console.log("Political party 3 has won!");

} else {
    console.log('something went wrong');
};

// const politicalScore = (politicalParty) => {
//     if (politicalParty = true) {
//         politicalParty++;
//     } else {
//         return politicalParty;
//     }
// };

// console.log(politicalScore(policitalParty1));