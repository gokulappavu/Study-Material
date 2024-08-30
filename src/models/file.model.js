const mongoose=require("mongoose")

const fileSchema=new mongoose.Schema({
    originalname:{
        type: String,
    },

    filename:{
        type: String,
    },

    mimetype:{
        type: String,
    },

    destination:{
        type: String,
    },
    userId: {
        type: String
    }

})

const fileModel =  mongoose.model("fileSchema",fileSchema );
module.exports=fileModel;