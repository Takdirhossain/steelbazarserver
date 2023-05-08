const router = require("express").Router();
const Category = require("../models/Category")

//category added router
router.post("/category", async(req,res)=> {
    const category = new Category({
        catename : req.body.catename
    })
    try{
        const cate = await category.save();
        res.status(201).json(cate);
    }catch(err){
        res.status(500).json(err.message);
    }
})

router.get("/category", async (req,res)=> {
try{
    const data = await Category.find()
    res.status(201).json(data)
}catch(err){
    console.log(err.message);
}
})
module.exports = router;