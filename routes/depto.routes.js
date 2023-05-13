const express=require("express");
const deptoController= require("../controller/depto.controller");

const api=express.Router();

api.post("/depto",deptoController.createDepto);
api.get("/deptos",deptoController.getDepto);
api.get("/deptos/:id",deptoController.buscarOneDepto);
api.delete("/depto/:id",deptoController.deleteDepto);
api.patch("/depto/:id",deptoController.updateDepto);

module.exports=api;