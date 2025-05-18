//  console.log("ASAP Frontend"[12]); // string indexing
//  console.log("ASAP Frontend".length); // How many characters does the string have

// let userEmail = "ika@gmail.com"
// let age = 18;
// let name = "Ika";

// Const Keyword

// const points = 100;

// Curency Converter

// $AUD to $USD Formula:

// AUD = USD x 1.5

// let USD = 1200;
// let AUD = USD * 1.5;

// let hasMembership = true;
// let signedIn = true;

// if (hasMembership === true) {
//     //console.log("Show user the video")
// }
// else {
//     // console.log("tell user to log in")
// }

// if (age >= 18) {
//     //console.log(`You're older than ${age}, you may enter the club`)
// }
// else {
//     //console.log(`You are less than ${age}, get outta here!`)
// }

// Tenary operators

// let hasId = false

// console.log(age >= 18 || hasId ? "You may enter the club" : "You cannot enter the club");

// console.log(hasMembership && signedIn ? "Show user the video" : "Tell the user to login");

//  Loops

// let counter = 1

// while (counter <= 20) {
//     console.log(counter);
//     counter = counter + 1
// }

// console.log("While loop finished running");

// For loop

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// for (i = 1; i <= 15; i++) {
//    if(i % 5 === 0){
//     console.log(`${i} - ASAP FRONTEND`)
//    }
//    else if(i % 2 === 0){
//     console.log(`${i} ASAP`)
//    }
//    else{
//     console.log(`${i} FRONTEND`)
//    }

// }

// str = "ASAP Frontend";

// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// Functions

// // Function Declaration
// function greetUser(name, time){
//    console.log(`Good ${time}, ${name}`);
// }

// // Calling the function
// greetUser("Ika", "morning");
// greetUser("Kat");
// greetUser("Megan");

// function sum(num1, num2) {
//     return num1 + num2

// }

// console.log(sum(5, 4))

// function convertUsdToAud(usdAmount, exchangeRate){
//     return usdAmount * exchangeRate
// }

// Arrow function

// const convertUsdToAud = (usdAmount, exchangeRate) => {
//     return usdAmount * exchangeRate
// }

// console.log(convertUsdToAud(1000, 1.5))

// Arrays

// let array = ["Apples", "Bananas", "Eggs", "Milk"]

// // First element of an array
// console.log(array[0])

// // Last element of an array
// console.log(array[array.length - 1])

// // array methods
// array.push("Grapes")

// array.filter((element) => {
//     console.log(element);
// })

// console.log(array)

// let array = [20, 15, 10, 30];

// let filteredArray = array.filter((element) => {
//     console.log(element)
//     if(element <= 15){
//         return true
//     }
// })

// console.log(filteredArray)

// another way

// let array = [20, 15, 10, 30];

// let filteredArray = array.filter(element => {
//      return element <= 15;
//     })

//     console.log(filteredArray)

// 3rd way

// let array = [20, 15, 10, 30];

// let filteredArray = array.filter((element) => element <= 15);

// console.log(filteredArray)

// exercise

// let age = [18, 20, 16, 15, 21];

// let filteredAge = age.filter(element => element >= 18
//     )

// console.log(filteredAge)

//  let people = [18, 20, 16, 15, 21];

// for (let i = 0; i < people.length; i++){
//     console.log(i)
// }

//  Map method

// let array = [1, 2, 3, 4, 5];

// let newArray = array.map(element => "Ekse")

// console.log(newArray)

// let usDollars = [10, 20, 30, 40]

// let auDollars = usDollars.map((element) => element * 1.5)

// console.log(auDollars)

// let usDollars = [100, 150, 35]

// let auDollar = usDollars.map((element) => {
//     console.log(element)
//     return element * 1.5
// })

// console.log(auDollar)

// let usDollars = [10, 20, 30, 40]

// let auDollars = []

// for(i = 0; i < usDollars.length; i++) {
//     auDollars.push(usDollars[i] * 1.5)
// }

// console.log(auDollars)

// Objects

// let users = [
//   {
//     email: "ika@gmail.com",
//     password: "test1234",
//     name: "Ika Adams",
//     discord: "examplediscord",
//     subscription: "VIP+",
//     lessonsCompleted: [1, 2, 3],
//   },
//   {
//     email: "kat@gmail.com",
//     password: "test1234",
//     name: "Ika Adams",
//     discord: "examplediscord",
//     subscription: "VIP+",
//     lessonsCompleted: [1, 2, 3],
//   },
// ];

// console.log(users[0].lessonsCompleted.map((element) => element * 2));

// console.log(users[1].name[0]);

// function signUp(
//   email,
//   password,
//   name,
//   discord,
//   subscription,
//   lessonCompleted
// ) {
//     console.log 
// }

// The DOM

// // Change content / html
// document.querySelector('h1').innerHTML += "Asap Frontend"

// // Change CSS
// document.querySelector('h1').style.fontSize = "20px"