const http = require(`http`)
const mongodb = require("mongodb")

const connectionString = "mongodb+srv://mdbek55:woosong2024!@mdbek.fyev9.mongodb.net/Reja?retryWrites=true&w=majority&appName=MDbek"
let db;

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else{
        console.log("MongoDB connection succeed");
        console.log(client);
        
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
  
        
    }
})
