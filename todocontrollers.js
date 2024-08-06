//Importing models.
const todolist=require('../models/todo')

//Creating ToDo List with Given fields.
const createToDo=async(req,res)=>{
    try{
        const{title,description,completed}=req.body

        const ToDo=new todolist({
            title,description,completed
        })
        await ToDo.save()
        res.status(201).json(ToDo)
    }catch{
        console.log("There is an error")
        res.status(500).json({message:"Server Error"})
    }
}
//Getting all the ToDos.
const getToDO=async(req,res)=>{
    try{
        const getall=await todolist.find()
        res.status(201).json(getall)
    }catch{
        console.log("There is an error")
        res.status(500).json({message:"Server Error"})
    }
}

//Getting the ToDos by "id".
const singleToDO=async(req,res)=>{
    try{
        const sigletodo=await todolist.findById(req.params.id)

        if(!sigletodo){
            return res.status(404).json({message:"Not Found"})
        }res.status(201).json(sigletodo)
    }catch{
        console.log("There is an error")
        res.status(500).json({message:"Server Error"})
    }}

//Exporting the created controllers.
module.exports={createToDo,getToDO,singleToDO}