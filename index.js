const express = require('express')
const env = require('dotenv').config()
var port = process.env.PORT || 4000 
const mongoose = require("mongoose");
const routes = require("./routes/routes")


const app = express()



app.get("/",(req,res)=>{
    res.send("Homepage successfully connected")
})

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api",routes)


mongoose
.connect("mongodb://localhost:27017/my_database")
.then(()=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log(`Server is connect at http://localhost:${port}`);
    })

})
 .catch((err) => {
    console.log("Error connecting database")
})


