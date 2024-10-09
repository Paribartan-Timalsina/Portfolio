
const mongoose=require("mongoose")
const projectSchema= new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    githubLink:{
    type:String,
        required:true,
    }
})

module.exports=mongoose.model("projectSchema",projectSchema)