import routerx from "express-promise-router";
import personaController from "../controller/depto.controller";

const router=routerx();

router.post("/guardarPersona",personaController.crearDepto);
router.get("/consultarPersona",personaController.consultarDepartamentos);
router.get("/buscarOnePersona/:id",personaController.buscarOnePersona);
router.delete("/eliminarPersona/:id",personaController.deleteDepto);
router.patch("/actualizarPersona/:id",personaController.updatePersonas);


export default router;
