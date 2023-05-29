import models from "../models";


export default{
    crearDepto: async (req,res,next)=>{      //asyn = asincrono
        try {
                const depto=new models.Depto(req.body) //para usar todo los campos
        
                const guardarDepto=await depto.save();        //usar siempre await para asyn y crear tiempos de espera
                res.status(200).json(guardarDepto);
                console.log(req.body);
        } catch (error) {
            res.status(500).send({
                msg:"Ocurrido un error al guardar"
            });
            next(error);
    }
    },

    consultarDepartamentos: async(req,res,next)=>{
        try {
            
            const consultar= await models.Departamentos.find(); //para consultar empleados
            res.json(consultar);

        } catch (error) {
            res.status(500).send({
                msg:"Ocurrido un error al guardar"
            });
            next(error);
            
        }
    },

    deleteDepto: async(req,res)=>{
    const {id}=req.params;

    Depto.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el departamento"})
        }else{
            res.status(200).send({msg: "departamento eliminado"})
        }
    })
},

    buscarOneDepto(req,res){
    const {id}=req.params;
    Depto.findById(id, (error, deptoStored)=>{
        if (error){
            res.status(400).send({msg: "No se encuetra el dato"})

        }else{
            res.status(200).send({msg: deptoStored})
        }
    })

    },

    updateDepto(req,res){
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
}