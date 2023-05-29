import routerx from "express-promise-router";
import deptoController from "../controller/depto.controller";

const router=routerx();

router.post("/crearDepto",deptoController.crearDepto);
router.get("/consultarDepartamentos",deptoController.consultarDepartamentos);
router.get("/deptos/:id",deptoController.buscarOneDepto);
router.delete("/eliminarDepto/:id",deptoController.deleteDepto);
router.patch("/depto/:id",deptoController.updateDepto);

export default router;
