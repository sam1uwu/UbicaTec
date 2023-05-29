import models from "../models";

export default{
    crearPersonas: async (req,res,next)=>{      //asyn = asincrono
        try {
                const persona=new models.Persona(req.body) //para usar todo los campos
        
                const guardarPersona=await persona.save();        //usar siempre await para asyn y crear tiempos de espera
                res.status(200).json(guardarPersona);
                console.log(req.body);
        } catch (error) {
            res.status(500).send({
                msg:"Ocurrido un error al guardar"
            });
            next(error);
    }
    },

    consultarPersonas: async(req,res,next)=>{
        try {
            
            const consultar= await models.Personas.find(); //para consultar empleados
            res.json(consultar);

        } catch (error) {
            res.status(500).send({
                msg:"Ocurrido un error al guardar"
            });
            next(error);
            
        }
    },

    deletePersonas: async(req,res)=>{
    const {id}=req.params;

    Personas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el departamento"})
        }else{
            res.status(200).send({msg: "departamento eliminado"})
        }
    })
}



}