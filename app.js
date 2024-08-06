// importing necessary dependencies.
const express=require('express')
const mongoose=require('mongoose')
const dotEnv=require('dotenv')
const bodyparser=require('body-parser')

//Importing Routes to Define the API endpoints.
const todoRutes=require('./routes/todoroutes')

//Assigning express module to "app" named variable.
const app=express()

dotEnv.config()

//using bodyparser to get data in json format.
app.use(bodyparser.json())

//port address to run the server.
const port=process.env.port || 8000

//connecting to MongoDb at the Backend.
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB is connected successfully")
}).catch((error)=>{
    console.log(`${error}`)
})

//Middleware to define  ednpoint.
app.use('/todo',todoRutes)

//Running server using Express.
app.listen(port,()=>{
    console.log("Node js Server Started and running at "+port)
})