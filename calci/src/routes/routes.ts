import { Router } from "express";
import calciRouter from "./calculator.routes";

const router = Router();

// Mount the calculator router on the `/calci` route
router.use("/calci", calciRouter);

export default router;
