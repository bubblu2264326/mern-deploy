import mongoose from 'mongoose';
import product from '../models/products.js'





async function readAll(req,res){
       const data=await product.find()
       res.json(data) 
};

async function read(req,res){

    const data=await product.findOne({productName:req.params.name})
    console.log("i a m name one");
    
    res.send(data)
}

async function readbyId(req,res){

    const data=await product.findById(req.params.id)
    console.log("i am the id waro");
    
    res.send(data)
}

// function create(req,res){
//     const newProduct=new product(req.body);
//    console.log(req.body);
//    console.log(newProduct);
   
//     newProduct.save().then((doc)=>{
//         res.status(200).json(doc)
        
//     }).catch((err)=>{
//        res.status(400).send("failed")
        
//     });
    
   
// }

async function create(req, res) {
    try {
      console.log(req.body); // Debug incoming data
  
      const newProduct = new product(req.body); // Ensure 'product' is correctly defined
      console.log(newProduct);
  
      const savedProduct = await newProduct.save(); // ✅ Await the save operation
      res.status(200).json(savedProduct); // ✅ Send saved product back
    } catch (error) {
      console.error('Error saving product:', error);
      res.status(400).json({ error: 'Failed to save product' }); // Send detailed error
    }
  }
  

async function deleteobj(req,res){
    console.log(req.params.id);
    
      await product.deleteOne({_id:req.params.id})
       const data = await product.find()
      res.send(data)
}

export default {readAll,read,create,deleteobj,readbyId}