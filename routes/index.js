import routerx from "express-promise-router";
import deptoRouter from "./depto.routes";
import personaRouter from "./persona.routes";


const router=routerx();

router.use("/depto",deptoRouter)
router.use("/persona",personaRouter)

export default router;