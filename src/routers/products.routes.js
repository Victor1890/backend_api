import { Router } from "express";
const router = Router();

import * as productCtrls from "../controllers/product.controller";

router.post("/", productCtrls.createProducts);
router.get("/", productCtrls.getProducts);
router.get("/:id", productCtrls.getProductById);
router.put("/:id", productCtrls.updateProductById);
router.delete("/:id", productCtrls.deleteProductById);

export default router;
