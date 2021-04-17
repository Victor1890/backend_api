"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var productCtrls = _interopRequireWildcard(require("../controllers/product.controller"));

var router = (0, _express.Router)();
router.post("/", productCtrls.createProducts);
router.get("/", productCtrls.getProducts);
router.get("/:id", productCtrls.getProductById);
router.put("/:id", productCtrls.updateProductById);
router["delete"]("/:id", productCtrls.deleteProductById);
var _default = router;
exports["default"] = _default;