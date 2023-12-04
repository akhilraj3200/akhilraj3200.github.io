const express = require('express');

const Product = require('../../../models/Product');

module.exports.createproduct = async(req, res)=>{
    console.log(req.body)
    const product =  await Product.create(req.body).then((user)=>{  
        console.log(user)
    res.status(200).json(user);}).catch((err)=>{res.status(400).json({msg:'Unknown error'});})
}

module.exports.listproduct = async(req, res)=>{
    const post = await Product.find({}, {'ID':1, 'name':1, 'quantity':1,'_id':0}).then((doc) => res.status(200).json(doc));
    
}
module.exports.deleteproduct = async(req, res)=>{
    const post = Product.findOne({ID : req.params.ID}).then(async(doc)=>{if(doc){await Product.deleteOne({ID: doc.ID});  res.status(200).json({msg: "deleted successfully", post_id: req.params.ID})}else{res.json(404,{msg: "record not found"})}} ).catch((err)=>{ console.log(err);res.status(400).json({msg:'Unknown error'})});

}

module.exports.updateproduct = async(req, res)=>{
    const product = (await Product.findOneAndUpdate({ID : req.params.ID},{$set :{quantity: req.query.number}}));
    if(product){
        return res.status(200).json({"message": "successfull"})
    }
}
   