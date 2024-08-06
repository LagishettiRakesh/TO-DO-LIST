//Importing Express.
const express=require('express')

//Assigning express.router to variable named "router".
const router=express.Router()

//Importing todocontrollers from file "controllers".
const ToDocontroller=require('../controllers/todocontrollers')

//Importing todo from file "models".
const ToDo=require('../models/todo')

//using "APIs " 
router.post('/add-todo',ToDocontroller.createToDo)

router.get('/getlist',ToDocontroller.getToDO)

router.get('/singleTO-Do/:id',ToDocontroller.singleToDO)


//Exporting Router use Endpoints.
module.exports=router