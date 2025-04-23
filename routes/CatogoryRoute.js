const { addcategory, getcategory } = require("../controller/CategoryController")

const express=require('express')
const router=express.Router();

router.post('/Categoryadd',addcategory);
router.get('/',getcategory);
module.exports=router;

