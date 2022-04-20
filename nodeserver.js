const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 3000
//Creating App --> Pointer(=>{Object}) 
app.get("/",(req,res) =>{
    res.send("Hello NodeJS!")
}) 
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})