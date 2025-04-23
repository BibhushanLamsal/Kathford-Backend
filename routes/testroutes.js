const express=require("express");
const { sample, getTest } = require("../controller/testcontroller");
const { name } = require("../controller/bibhushan");

const router=express();

router.get("/home",sample);
router.get("/test",getTest);
router.get("/name",name)
module.exports=router