const express=require("express")
const router=express.Router()
const upload=require("../schema/multer")
const {getprojects,postprojects}=require("../controller/datacontroller")
router.route("/getprojects").get(getprojects)
router.route("/postprojects").post(upload.single("image"),postprojects)
module.exports=router