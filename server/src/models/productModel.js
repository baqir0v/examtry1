import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
    categories:{type:String,required:true}
})

export default mongoose.model("products",productModel)