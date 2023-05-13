const Personas=require("../models/persona.model");

function createPersonas(req,res){
    const personas=new Personas(req.body);

    personas.save((error, personaStored)=>{
        if(error){
            res.status(400).send({msg:"Error al guardar"})
        }else{
            res.status(200).send(personaStored)
        }
    })
}

module.exports={
    createPersonas
}

