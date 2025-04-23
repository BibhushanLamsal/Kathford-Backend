const express = require("express");
const cors=require("cors")

const app=express();
const testroute=require("./routes/testroutes")
const Categoryroute=require("./routes/CatogoryRoute.js")
const productroute=require("./routes/productroutes.js")
require("dotenv").config();
app.use(cors());
port=process.env.PORT || 8000
app.use(express.json());
require("./database/connection.js");
 

app.listen(port, ()=>{
    console.log(`We are in port ${port}`);
});
app.use(testroute)

app.use("/Category",Categoryroute)
app.use("/product",productroute)