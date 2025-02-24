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

const countLetter = (a, b) => {

    let count = 0
    
    for (let i = 0; i < b.length; i++) {
       if (b[i] == a) {
        count++
       }
    }
    
     return count;
    }

    console.log(countLetter("e", "engineer"));
    
    