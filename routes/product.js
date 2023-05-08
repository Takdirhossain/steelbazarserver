const router = require("express").Router();
const Product = require("../models/Product")

//add Product Method 
router.post("/product",  async(req, res) => {
    const newProduct = new Product({
        category: req.body.category,
        status: req.body.status,
        company: req.body.company,
        thickness: req.body.thickness,
        weight: req.body.weight,
        pieces: req.body.pieces,
        average: req.body.average,
        closingwt: req.body.closingwt,
        closingpcs: req.body.closingpcs,
      });
      try{
        const data = await newProduct.save()
        res.status(200).json("Add Product Success")
      }catch(err){
        res.status(404).json(err.message)
      }
})
//get product by category
router.get('/product/:category', async (req, res) => {
    try {
      const examples = await Product.find({ category: req.params.category });
      res.json(examples);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //update product 
router.put('/product/:id', async (req, res) => {
    try {
      const example = await Product.findById(req.params.id);
      if (!example) {
        return res.status(404).json({ message: 'Data not found' });
      }
      example.status = req.body.status || example.status;
      example.company = req.body.company || example.company;
      example.weight = req.body.weight || example.weight;
      example.pieces = req.body.pieces || example.pieces;
      example.average = req.body.average || example.average;
      example.closingwt = req.body.closingwt || example.closingwt;
      example.closingpcs = req.body.closingpcs || example.closingpcs;
      example.thickness = req.body.thickness || example.thickness;
      const updatedExample = await example.save();
      res.json(updatedExample);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //delete product
  router.delete('/product/:id', async (req, res) => {
    try {
      const example = await Product.findById(req.params.id);
      if (!example) {
        return res.status(404).json({ message: 'Data not found' });
      }
     const data = await example.deleteOne();
      res.json(`delete success `);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;