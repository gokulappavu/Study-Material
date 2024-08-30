const AccountModel = require("../models/account.model");




const createAccount = async (req, res) => {
    try {
        let userId = req.userId;

        let data = {
            ...req.body,
            userId,
        };

        const create = await AccountModel.create(data);

        res.json({
            data: create
        });

    } catch (error) {
        res.json({
            Error: error
        })
    }
};



const getUserAccount=async(req,res)=>{
    try {
        const userId=req.userId

        const findAns= await AccountModel.findOne({userId})
        if(!findAns)return res.status(404).json({ Message:"Data not found" })

        res.json({ findAns })

    } catch (error) {
        res.json({error})
    }
}

const updateAccount=async(req,res)=>{
    try {
        const { objectId } = req.query
        const update = await AccountModel.findByIdAndUpdate( objectId, req.body, { new: true } )
        if(!update)return res.status(404).json({ Message: "Data Not Found"})

            res.json({ update })
        
    } catch (error) {
        res.json({ error })
        
    }
}

const updateManyAccount = async (req,res) => {
    try {
        const userId = req.userId
        const updateAll = await AccountModel.updateMany( { userId }, req.body)
        res.json({ updateAll })
    } catch (error) {
        res.json({ error })
    }
}

const deleteManyAccount = async(req,res)=>{
    try {
        const userId = req.userId
        const userDelete = await AccountModel.deleteMany( {userId} )
       
            res.json({ userDelete })
        
    } catch (error) {
        res.json({ error })
        
    }
}

const deleteAccount = async(req,res)=>{
    try {
        const { objectId } = req.query
        const update = await AccountModel.findByIdAndDelete( objectId )
        if(!update)return res.status(404).json({ Message: "Data Not Found"})

            res.json({ update })
        
    } catch (error) {
        res.json({ error })
        
    }
}
module.exports = {
    createAccount,
    getUserAccount,
    updateAccount,
    updateManyAccount,
    deleteManyAccount,
    deleteAccount

};