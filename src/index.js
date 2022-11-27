const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())
app.use("/",route)
mongoose.connect("mongodb+srv://kanil485333:anil16shalini@project1.lboaf6t.mongodb.net/Anil1997-db",{
    useNewUrlParser:true
}).then(()=>console.log("MongoDB is Connected"))
.catch((err)=>console.log(err))

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on Port",3000)
})