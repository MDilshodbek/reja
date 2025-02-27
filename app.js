console.log("Web serverni boshlash");
const express = require("express");
const app = express();

const res = require("express/lib/response")
const fs = require("fs")

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err){
        console.log("ERROR:", err);        
    }else {
        user = JSON.parse(data)
    }
})
// MongoDB connect
const db = require("./server").db()
 

// Web server qurishda 4ta bosqich bor

// step 1: Kirish code

// to make the public folder available to see
app.use(express.static("public")); 
// json formatdagi datani object holatga ozgartirib beradi
app.use(express.json());
// formga kiritilgan ma'lumotlar serverga post qilinganda express qabul qilib oladi
app.use(express.urlencoded({extended: true}));

// Step 2 - session code

// Step 3 - Views code/ backend site server rendering
// npm i ejs
app.set("views", "views"); - /* mentioning the folder */
app.set("view engine", "ejs"); /* mentioning that the view engine is ejs */

// Step 4 - Routing code
// app.get("/hello", function(req, res){
// res.end("<h1>Hello World by Oscar</h1>");
// });

// app.get("/gift", function(req, res){
//     res.end(`<h1>Siz sovg'alar packagedasiz</h1>`);
// })

app.post("/create-item", (req, res) => {
    console.log('user enterd /create-item');
    const new_reja = req.body.reja

    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if (err) {
             console.log(err);
            res.end("smth went wrong")
        } else {
            console.log(data);
            res.end("successfully added")
            
        }
    })
    // res.end("success")
    // res.json({test: "success"})
})

app.get("/", function(req, res){
    console.log('user enterd /');
    
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("smth went wrong")
        } else {
            console.log(data);
            res.render("reja", {items: data})
            
        }
    })
    
})

// app.get('/author', (req, res)=> {
//     res.render("author", {user: user} )
// })

module.exports = app;

// Loyihalar master va develop branchlaridan iborat