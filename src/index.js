const express = require("express");
const connection = require("./config/connection");
const route = require("./routes/index");
const cors = require('cors');

require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

connection();

app.use("/v1", route);


app.use("/", (req, res)=>{
res.send("Working")
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${7000}`);
})