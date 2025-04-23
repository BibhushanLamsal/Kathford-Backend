const express=require("express");
const { addproduct, getProduct, getProductbyid,getProductBycategoryId, deleteproduct } = require("../controller/productcontroller");
const router=express.Router();

router.post("/addproduct",addproduct);
router.get("/",getProduct);
router.get("/:id",getProductbyid);
router.get("/category/:id",getProductBycategoryId);
router.get("/category/:id",getProductBycategoryId);
router.delete("/deleteproduct/:id",deleteproduct);


module.exports=router;