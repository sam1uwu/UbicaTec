const express=require("express");
const personaController= require("../controller/persona.controller");

const api=express.Router();

api.post("/persona",personaController.createPersonas);
//api.get("/alumnos",AlumnosController.getAlumnos);
//api.delete("/alumno/:id",AlumnosController.deleteAlumno);
//api.patch("/alumno/:id",AlumnosController.updateAlumnos);
//api.get("/alumno/:id",AlumnosController.getAlumno);

module.exports=api;