// console.log("welcome to the class");
// // this is a comment
// // this is another comment
// let name = "alice";
// const myCity = "melbourne";
// console.log(myName, "Lives in", myCity02);
// console.log(`${myName}

//     lives in

//     ${myCity02}`);
// let count = 10;
// console.log(count);

// let isItMorningClass = true;
// let isItAfternoonClass = false;

// let myStudentRecord = {
//   name: "Rohit",
//   id: 1234,
//   class: "OART1013",
//   isItScience: false,
//   isItDesign: true,
// };

// console.log("Hello everyone, my name is", myStudentRecord.name);

// console.log("my id is", myStudentRecord.id);
// console.log("my class is", myStudentRecord.class);
// console.log("are you science student?", myStudentRecord.isItScience);

// const numberArray = [2, 4, 6, 8, 10];
// console.log(numberArray[2]);
// myStudentRecord.itItScience = true;
// if (myStudentRecord.isItScience === true) {
//     console.log("Sorry you are in a wrong class");
// } else {
//   console.log("Welcome to OART1013");
// }

// let myScore = 60;
// if (myScore>=90) {
//     console.log("You scored a HD");
// } else if (myScore < 90 && myScore >= 70) {
//     console.log("you scored a D");
// } else if (myScore < 70 && myScore >= 50) {
//     console.log("you scored a D");

// }

// console.log ("Hello Matthew");
// console.log ("Hello Mark");
// console.log ("Hello John");
// console.log ("Hello Luke");
// console.log ("Hello Bob");

const names = ["Matthew", "Mark", "John", "Luke", "Bob", "Bob 2", "Bob 3"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 20 },
  { name: "Sneakers", price: 20 },
  { name: "Backpack", price: 20 },
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(total);
let sum = 0;
for (let i = 0; i < 4; i++) {
  sum = sum + shoppingCar[i].price;
  console.log("intermediate sum", sum);
}

console.log(sum);
