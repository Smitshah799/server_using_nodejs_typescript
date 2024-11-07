"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calci_controller_1 = require("../controllers/calci.controller");
const calciRouter = (0, express_1.Router)();
calciRouter.post("/add", calci_controller_1.additionController);
calciRouter.post("/sub", calci_controller_1.substractionController);
calciRouter.post("/pro", calci_controller_1.productController);
calciRouter.post("/div", calci_controller_1.divisonController);
exports.default = calciRouter;
//# sourceMappingURL=calculator.routes.js.map