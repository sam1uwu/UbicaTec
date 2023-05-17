const express=require("express");
const personaController= require("../controller/persona.controller");

const api=express.Router();

api.post("/guardarPersona",personaController.createPersonas);
api.get("/consultarPersona",personaController.getPersonas);
api.get("/buscarOnePersona/:id",personaController.buscarOnePersona);
api.delete("/eliminarPersona/:id",personaController.deletePersonas);
api.patch("/actualizarPersona/:id",personaController.updatePersonas);


module.exports=api;