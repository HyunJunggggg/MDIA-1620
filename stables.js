// final stable

//------------------------- Setting up shop : variables -------------------------//

let horses = [];
let VisitorMessage = "Hello, Welcome to the My Stables! ";
let latePaymentFee = 300;
let availableStalls = 20;

//----------------- First day(function,constructors,push,object Literal) ------------------//

const Horse = function (
    name,
    nickname,
    favoriteTreat,
    age,
    monthlyRent,
    location,
    born,
    hobby
) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.born = born;
    this.hobby = hobby;
    this.introduce = function () {
        return `Hello, I'm ${this.name} and my nickname is ${this.nickname}. I love to have ${this.favoriteTreat}.`;
    };
    this.favoriteThings = function () {
        return `if you give me ${this.favoriteTreat}, I will show you ${this.hobby}.`;
    };
};

const horse1 = new Horse(
    "Americano",
    "sugarFree",
    "carrot",
    1,
    100,
    true,
    "Canada",
    "kickingBall"
);
const horse2 = new Horse(
    "Latte",
    "Milk",
    "lettuce",
    2,
    200,
    false,
    "Korea",
    "jumping"
);
const horse3 = new Horse(
    "Cappuccino",
    "foam",
    "cucumber",
    3,
    300,
    true,
    "US",
    "show jumping"
);

horses.push(horse1, horse2, horse3);

const horse4 = {
    name: "Mocha",
    nickname: "chocolate",
    favoriteTreat: "Sugar",
    age: 4,
    monthlyRent: 400,
    location: false,
    born: "Mexico",
    hobby: "swimming",
    introduce: function () {
        return `Hello, I'm ${this.name} and my nickname is ${this.nickname}. I love to have ${this.favoriteTreat}.`;
    },
    favoriteThings: function () {
        return `if you give me ${this.favoriteTreat}, I will show you ${this.hobby}.`;
    },
};

horse1.isHungry = true;
horse2.isHungry = false;
horse3.isHungry = false;
horse4.isHungry = true;

horses.push(horse4);
console.log(horses);

//----------------- Stable roster (Reference data) -----------------//
/*
[[
  Horse {
    name: 'Americano',
    nickname: 'sugarFree',
    favoriteTreat: 'carrot',
    age: 1,
    monthlyRent: 100,
    location: true,
    born: 'Canada',
    hobby: 'kickingBall',
    introduce: [Function (anonymous)],
    favoriteThings: [Function (anonymous)],
    isHungry: true
  },
  Horse {
    name: 'Latte',
    nickname: 'Milk',
    favoriteTreat: 'lettuce',
    age: 2,
    monthlyRent: 200,
    location: false,
    born: 'Korea',
    hobby: 'jumping',
    introduce: [Function (anonymous)],
    favoriteThings: [Function (anonymous)],
    isHungry: false
  },
  Horse {
    name: 'Cappuccino',
    nickname: 'foam',
    favoriteTreat: 'cucumber',
    age: 3,
    monthlyRent: 300,
    location: true,
    born: 'US',
    hobby: 'show jumping',
    introduce: [Function (anonymous)],
    favoriteThings: [Function (anonymous)],
    isHungry: false
  },
  {
    name: 'Mocha',
    nickname: 'chocolate',
    favoriteTreat: 'Sugar',
    age: 4,
    monthlyRent: 400,
    location: false,
    born: 'Mexico',
    hobby: 'swimming',
    isHungry: true
  }
] */

//---------Growing business(comparison operators,if statement)------------//

availableStalls -= horses.length;

console.log(`Available stalls: ${availableStalls}`);

if (availableStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log(`We have ${availableStalls} available`);
}

function calculateLateRentFee(horse) {
    return horse.monthlyRent + latePaymentFee;
}
horses.forEach((horse) => {
    console.log(`if the ${horse.name} pays late,  
      ${horse.name} need to pay $${calculateLateRentFee(
        horse
    )}, which is monthly Rent + late payment fee.`);
});

function findHorseLikeTreat(pickyTreat) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].favoriteTreat === pickyTreat) {
            console.log(`${horses[i].name} loves to eat ${pickyTreat}!`);
        } else {
            console.log(`${horses[i].name} doesn't like to eat ${pickyTreat}`);
        }
    }
}

findHorseLikeTreat(horses, "Sugar");

let chosenHorse = horses[0].name;

function chosenNickname(chosenHorse) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].name === chosenHorse) {
            return `We found ${horses[i].name}`;
        }
    }
    return "We couldn't find horse.";
}

console.log(chosenNickname(chosenHorse));

// //------------------------- Day to day operations -------------------------//

function checkHobby(horses) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].hobby === "jumping") {
            console.log(`${horses[i].name} loves to jump!`);
        }
    }
}

checkHobby(horses);

function moveHorsesOutside(gettingDark) {
    horses.forEach((horse) => {
        if (!horse.location) {
            horse.location = true;
            console.log(
                `${horse.name} has been moved outside to spend time in the sun.`
            );
        }

        if (gettingDark && horse.location) {
            horse.location = false;
            console.log(
                `It's dark outside, ${horse.name} has been moved inside for sleep.`
            );
        }
    });
}

moveHorsesOutside(false);
moveHorsesOutside(true);

function switchHorsesLocation() {
    horses.forEach((horse) => {
        if (horse.location) {
            horse.location = false;
            console.log(`${horse.name} has been moved inside.`);
        } else {
            horse.location = true;
            console.log(`${horse.name} has been moved outside.`);
        }
    });
}

function feedHorses() {
    horses.forEach((horse) => {
        if (horse.location === false) {
            console.log(
                `${horse.name} has been moved back to inside for food.`
            );
        } else console.log(`${horse.name} is having a delicious food.`);
    });
}

feedHorses();

//------------------------- Bonus -------------------------//

//    ( (
//     ) )
//   ________
//  |        |
//  | COFFEE |
//  |_______ |
