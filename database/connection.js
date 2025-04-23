const mongoose=require("mongoose");
mongoose.connect(process.env.DATABASE)

.then(()=>{
console.log("Database connnected")
})

.catch((err)=>{
    console.log(err);
})