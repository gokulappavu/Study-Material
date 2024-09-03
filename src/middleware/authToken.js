const jwt = require("jsonwebtoken");
const register = require("../models/register.model");


const generateToken = (id) => {
    let token = jwt.sign({ userId: id }, process.env.JWT_KEY, { expiresIn: '1h' });
    
    
    return token;
};



const verifyToken = async (req, res, next) => {
    let token = req.headers.authorization;
    if(!token || !token.startsWith("Bearer"))return res.status(404).json({Message:"User must logedIn"})
    const withoutBearer = token.split(" ")[1];
    try {
        let payload = await jwt.verify(withoutBearer, process.env.JWT_KEY);

        const verify = await register.findOne({userId: payload.userId});       

        if (!verify) {
            return res.status(404).json({ message: "Not valid User" })
        };

        req.userId = verify.userId;
        next();

    } catch (error) {
        res.json({
            message: `${error}`
        })
    }
};


module.exports = {
    generateToken,
    verifyToken
};