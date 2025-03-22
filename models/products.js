import mongoose from "mongoose"
import { Schema } from "mongoose"

//schema
const mySchema=new Schema({
   
    name:{type:String,required:true},
    price: {type:Number,min:[0,"comon this should not be the price"],max:[10000,"freaky ah guy"],required:true},
   
})

const product=mongoose.model('products',mySchema);

export default product;