const express = require("express")

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 

const port = 3000

app.get("/register", (req, res) =>{


    res.sendFile(__dirname + "/views/index.html")
    
})

app.post("/register", (req, res) =>{

    const fullName = req.body.fullName;
    const age = req.body.age
    res.send(`You full name is ${fullName} and your age is ${age}`)
})


app.get("/user/:id/userName/:name", (req, res) =>{
   
     const id = req.params.id;
     const name = req.params.name;


    res.send(`<h1> Student id is : ${id} and Student age is :${name}  </h1>`)
})


app.listen(port, () =>{


    console.log(`Server is running successfully at http://localhost:${port}`)
})