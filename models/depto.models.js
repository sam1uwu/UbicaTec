const mongoose=require("mongoose");


const Depto=mongoose.Schema({

    name_depto: String,
    edificio: String,
    telefono_depto: Number,
    email_depto:{
        type:String,
        unique:true
    },
    created_at:{
        type:Date,
        default:Date.now}
})

module.exports=mongoose.model("departamentos", Depto);