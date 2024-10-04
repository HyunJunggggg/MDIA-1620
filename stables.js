//lesson3 - code
let horseName = "Awesomeguy";
console.log(horseName);
horseName = "Sunny";
console.log(horseName);
let horseNickname = "Sugar";
let horseAge = 5;
console.log(horseAge);
let isHorseInside = true;
console.log(isHorseInside);

//lesson4 - code
console.log(typeof true);
const STABLE_MONTHLY_FEE = 165; // Upper case preferred than lower case
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE * 3);
console.log("The stable monthly fee is " + STABLE_MONTHLY_FEE);
console.log(
  "My horse's name is " +
    horseName +
    " and he is " +
    (horseAge - 3) +
    " years old"
);
console.log(
  `My horse's name is ${horseName} and costs $${STABLE_MONTHLY_FEE} to board him`
);

console.log((58 + 33) / 6);
console.log("Hi" + " there");
console.log("Hi" - " there");
console.log("hi" + 2); // type coercion
console.log("2" + 2); // string
console.log(2 - "2"); // type coercion
console.log(true + 2); //  true =1 , false = 0  , type coercion

//Lab four work
console.log(
  `My adorable horse name is ${horseName} and nickname is ${horseNickname}`
);
console.log(STABLE_MONTHLY_FEE * 3) * 0.1;

// Lesson-5
if (true) {
  console.log("😍I only speak true.");
}

// true (1) or false (0)

if (horseAge === 10) {
  console.log(`🐴 ${horseName} is inside`);
} else {
  console.log(`🐴 ${horseName} is outside`);
}

if (horseAge === 10) {
  console.log("🐴 Our horse is old!");
} else if (horseAge === 9) {
  console.log("Our horse is practically geriatric!");
} else {
  console.log("Our horse is still pretty young.");
}

if (horseName !== "Sunny") {
  console.log(`${horseName} has come to visit the stables!`);
} else {
  console.log(horseName + " is lonely ");
}

if (horseName === "Sunny" && horseAge === 10) {
  console.log(horseName + " is young horsey");
} else {
  console.log(`${horseName} is an old horsey`);
}

if (horseName === "Sunny" || horseAge === 1) {
  console.log(horseName + " is young horsey");
} else {
  console.log(`${horseName} is an old horsey`);
}

//Lap 5
let horseLocation = "outside";

if (horseLocation === "outside" && horseNickname !== "orange") {
  console.log(`My adorable 🐴 ${horseName} is outside.`);
} else {
  console.log(horseName + "inside");
}
