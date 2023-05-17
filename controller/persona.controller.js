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
function getPersonas(req,res){
    Personas.find((error, personaStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(personaStored)
        }
    })
}

function deletePersonas(req,res){
    const {id}=req.params;

    Personas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar usuario"})
        }else{
            res.status(200).send({msg: "Usuario eliminado"})
        }
    })
}

function updatePersonas(req,res){
   const {id}=req.params;
   const datosPersona=req.body;

   Personas.findByIdAndUpdate({_id:id},datosPersona, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}
//copiado en documentacion de express
function buscarOnePersona(req,res){
    const {id}=req.params;
    Personas.findById(id, (error, personaStored)=>{
        if (error){
            res.status(400).send({msg: "No se encuetra el dato"})

        }else{
            res.status(200).send({msg: personaStored})
        }
    })
}

module.exports={
    createPersonas,
    getPersonas,
    deletePersonas,
    updatePersonas,
    buscarOnePersona
}

