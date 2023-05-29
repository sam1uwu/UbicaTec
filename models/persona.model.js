import {model,Schema} from "mongoose";

const Personas=new Schema({

    matricula:{
        type:String,
        unique:true
    },
    name_admi: String,
    fecha_nac: Date,
    sexo: String,
    tefefono_admin: Number,
    email_admi:{
        type:String,
        unique:true
    },
    created_at:{
        type:Date,
        default:Date.now}
})

export default model("Personas",Personas);