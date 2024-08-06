//Importing "mongoose module" to save the below fields in mongoDb
const mongoose=require('mongoose')

//Creating a model for ToDo List with the following fields
const todoSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

//Exporting model with todo mongoose schema
module.exports=mongoose.model('todo',todoSchema)