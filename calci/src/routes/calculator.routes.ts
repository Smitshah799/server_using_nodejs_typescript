import { Router } from "express";
import { additionController, divisonController, productController, substractionController } from "../controllers/calci.controller";

const calciRouter = Router();

calciRouter.post("/add", additionController);
calciRouter.post("/sub", substractionController);
calciRouter.post("/pro", productController);
calciRouter.post("/div", divisonController);


export default calciRouter;