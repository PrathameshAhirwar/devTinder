const jwt = require('jsonwebtoken')
const User = require('../models/user')

const userAuth = async (req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
           throw new Error("Please login!!")
        }
        const decodeToken = await jwt.verify(token,"ahir@123")
        const {_id} = decodeToken;
        const user = await User.findById({_id})
        if(!user){
            throw new Error("User not found!")
        }
        next()

    }catch(err){
        res.status(401).send("ERROR"+err)
    }
}

module.exports = {
    userAuth
}