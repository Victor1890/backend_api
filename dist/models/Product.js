"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var productSchema = new _mongoose.Schema({
  name: String,
  category: String,
  description: String,
  price: Number,
  stock: Number
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Product", productSchema);

exports["default"] = _default;