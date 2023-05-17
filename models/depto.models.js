//const mongoose=require("mongoose");
import mongoose, {Schema } from "mongoose";


const Depto= new Schema({

    name_depto: String,
    edificio: String,
    telefono_depto: Number,
    email_depto:{
        type:String,
        unique:true
    },
    persona:{
        type:Schema.Types.ObjectId,ref:"Persona"
    },
    created_at:{
        type:Date,
        default:Date.now}
})

const Deptos=mongoose.model('deptos',Depto);
export default Deptos;