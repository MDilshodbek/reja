// console.log(`Train task ishga tushdi`);

// console.log("Callback functions");

// const list = [
//    "0-20 good student",
//    "20-30 good lider",
//    "30-40 focus on you",
//    "40-50 do your hobby",
//    "50-60 invest into young gens",
//    "60 retire"
// ]

// function maslahatBering(a, callback){
//    if (typeof a !== "number") callback("Insert number", null);
//    else if(a <= 20) callback(null, list[0]);
//    else if(a > 20 && a <= 30) callback(null, list[1]);
//    else if(a > 20 && a <= 30) callback(null, list[2]);
//    else if(a > 30 && a <= 40) callback(null, list[3]);
//    else if(a > 40 && a <= 50) callback(null, list[4]);
//    else {
//       setTimeout(function(){
//          callback(null, list[5])
//       }, 5000)
//    }
// }

// console.log("passed here");

// maslahatBering(45, (err, data) => {
//    if(err) console.log('ERROR:', err);
//    console.log('javob:', data);
// })

// console.log("passed here2");

// console.log("Async function");

// const list = [
//    "0-20 good student",
//    "20-30 good lider",
//    "30-40 focus on you",
//    "40-50 do your hobby",
//    "50-60 invest into young gens",
//    "60 retire"
// ]

// async function maslahatBering(a){
//    if (typeof a !== "number") throw new Error("Insert number");
//    else if(a <= 20) return list[0];
//    else if(a > 20 && a <= 30) return list[1];
//    else if(a > 20 && a <= 30) return list[2];
//    else if(a > 30 && a <= 40) return list[3];
//    else if(a > 40 && a <= 50) return list[4];
//    else {
//       return new Promise((resolve, reject) => {
//          setInterval(() => {
//             resolve(list[5]);
//          }, 5000);
//       });
//       // return list[4]
//       // !!! Core funcs doesn't work !!! setTimeout(function(){
//       //    callback(null, list[5])
//       // }, 5000)
//    }
// }

// console.log("passed here");

// maslahatBering(65).then(data => {
//    console.log('javob:', data);
// }).catch(err => {
//    console.log('ERROR:', err);

// })

// console.log("passed here");

// async function run() {
//    let javob = await maslahatBering(35);
//    console.log(javob);
//    javob = await maslahatBering(15);
//    console.log(javob);
//    javob = await maslahatBering(71);
//    console.log(javob);
// }
// run()

// const countLetter = (a, b) => {

//     let count = 0

//     for (let i = 0; i < b.length; i++) {
//        if (b[i] == a) {
//         count++
//        }
//     }

//      return count;
//     }

//     console.log(countLetter("e", "engineer"));

// console.log("B-Task");

// const countDigits = (a) => {

//    let numbers = 0

//    for (const son of a) {

//       console.log(son);
//        if (!isNaN(son) && son !== ' ') numbers++;
//    }
//    return numbers;
// };

// console.log(countDigits("ad2a54y79wet0sfgb9"));

// console.log("Task - C");

// const moment = require("moment");
// const time = moment().format("HH:mm");

// class Shop {
//   constructor(bread, jam, coffee) {
//     this.bread = bread;
//     this.jam = jam;
//     this.coffee = coffee;
//   }

//   add(product, quantity) {
//     if (this[product] !== undefined) {
//       this[product] += quantity;
//       console.log(
//         `At ${time} added ${quantity} ${product}(s).`
//       );
//     } else {
//       console.log(`Cannot add ${product}, it's not in stock.`);
//     }
//   }

//   sell(product, quantity) {
//     if (this[product] !== undefined && this[product] >= quantity) {
//       this[product] -= quantity;
//       console.log(
//         `at ${time} sold ${quantity} ${product}(s).`
//       );
//     } else {
//       console.log(`Not enough ${product} in stock or product does not exist.`);
//     }
//   }

//   remained() {
//     console.log(
//       `At ${time} we have : Bread = ${this.bread}, Jam = ${this.jam}, Coffee = ${this.coffee}`
//     );
//   }
// }

// const myShop = new Shop(5, 5, 5);
// console.log(myShop);

// console.log("=====================");

// setTimeout(() => {
//   myShop.add("bread", 2);
//   myShop.add("jam", 2);
//   myShop.add("coffee", 2);
//   console.log("=====================");
// }, 1000);

// setTimeout(() => {
//   myShop.sell("bread", 1);
//   myShop.sell("jam", 1);
//   myShop.sell("coffee", 2);
//   console.log("=====================");
// }, 3000);

// setTimeout(() => {
//   myShop.remained();
// }, 5000);

// console.log("Task - D");

// const checkContent = (a, b) => {
//   return (
//     a.length === b.length &&
//     a.split("").sort().join("") === b.split("").sort().join("")
//   );
// };
// console.log(checkContent("mitgroup", "gmtiprou"));

// console.log("Task - E");

// const getReverse = (a) => {
//   return a.split('').reverse().join('');
// };
// console.log(getReverse("oscar"));

console.log("Task - F");

const findDoublers = (a) => {
  let ele = {};
  for (let letter of a) {
    if (ele[letter]) return true;
    ele[letter] = 1;
  }
  return false;
};

console.log(findDoublers("hello"));
