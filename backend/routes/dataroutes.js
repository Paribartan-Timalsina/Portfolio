const express=require("express")
const router=express.Router()
const upload=require("../schema/multer")
const {getProjects,postProject} = require("../controller/datacontroller")
router.route("/getprojects").get(getProjects)
router.route("/postprojects").post(upload.single("image"),postProject)
module.exports=router