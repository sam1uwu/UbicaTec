//const mongoose=require("mongoose");
import {model,Schema} from "mongoose"


const depto= new Schema({

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

export default model("depto",depto);;