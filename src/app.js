const express = require("express")
const app = express()
const connectDB = require('./config/database')
const User = require("./models/user")
const PORT = 3000

app.post("/signup", async (req,res)=>{
    const user = new User({
        firstName:"Rutuja",
        lastName:"Zade",
        email:"rZade@gmail.com",
        password:"rutu123"
    })

    try{
        await user.save()
        res.send("User created succesfully")
    } catch (err){
        res.status(400).send('Unable to create user :' + err.message)
    }
})

connectDB().then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err)=>{
    console.log(err.message)
})


