const mongoose = require("mongoose");


const mongoDBConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected..");                
    } catch (error) {
        console.log(`Connection Error: ${error}`);
        
    }
};


module.exports = mongoDBConnection;