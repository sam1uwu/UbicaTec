const Depto=require("../models/depto.models");

function createDepto(req,res){
    const depto=new Depto(req.body);
   
    depto.save((error, deptoStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(deptoStored)
        }
    })
}

function getDepto(req,res){
    Depto.find((error, deptoStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(deptoStored)
        }
    })
}

function deleteDepto(req,res){
    const {id}=req.params;

    Depto.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el departamento"})
        }else{
            res.status(200).send({msg: "departamento eliminado"})
        }
    })
}

function updateDepto(req,res){
   const {id}=req.params;
   const datosDepto=req.body;

   Depto.findByIdAndUpdate({_id:id},datosDepto, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}
//copiado en documentacion de express
function buscarOneDepto(req,res){
    const {id}=req.params;
    Depto.findById(id, (error, deptoStored)=>{
        if (error){
            res.status(400).send({msg: "No se encuetra el dato"})

        }else{
            res.status(200).send({msg: deptoStored})
        }
    })

}

module.exports={
    createDepto,
    getDepto,
    deleteDepto,
    updateDepto,
    buscarOneDepto
}