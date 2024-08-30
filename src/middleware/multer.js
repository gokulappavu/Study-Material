const multer = require("multer")

const storage= multer.diskStorage({
    destination:"src/files",
    filename:(req, file, cb)=>{
        const fileType=file.originalname.split(".").pop();
        cb(null, `${fileType}_${Date.now()}-${file.originalname}`)

    }
})

const singleUpload= multer({storage:storage})
const upload= singleUpload.single("picture")

module.exports=upload