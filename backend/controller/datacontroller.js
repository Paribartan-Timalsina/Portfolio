const project=require("../schema/projectsSchema")
exports.getprojects=async(req,res,next)=>{
    try{
    const projects=await project.find()
    console.log(projects)
    res.status(200).send({
        success: true,
        data: projects
    })
    }
    catch(e){
        res.status(400).send({
            success:false,
            error:e.message
        })
    }
    
}

exports.postprojects=async(req,res,next)=>{
    try{console.log("i am being sent here")
    const {projectName,description,githubLink}=req.body
    const image=req.file.path
    const myproject =await project.create({
        projectName,image,description,githubLink
    })
    myproject.save()
    res.status(200).send({
        success: true,
        message: "Completed",
    })
}
    catch(e){
        res.status(400).send({
            success: false,
            message: "Bad Request",
            error: e.message
        })
    }


}