console.log("Web serverni boshlash");

const express = require("express");
const app = express();
const http = require(`http`)
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
app.get("/hello", function(req, res){
res.end("<h1>Hello World by Oscar</h1>");
});

app.get("/gift", function(req, res){
    res.end(`<h1>Siz sovg'alar packagedasiz</h1>`);
})

app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"})
})

app.get("/", function(req, res){
    res.render(`harid`)
    
})

app.get('/author', (req, res)=> {
    res.render("author", {user: user} )
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
console.log(`The server is running successfully on port: ${PORT}`);
});

// Loyihalar master va develop branchlaridan iborat