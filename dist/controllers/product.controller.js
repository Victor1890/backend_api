"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getProducts = exports.createProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Product = _interopRequireDefault(require("../models/Product"));

var createProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var newProduct, productSaved;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newProduct = new _Product["default"](req.body);
            _context.next = 3;
            return newProduct.save();

          case 3:
            productSaved = _context.sent;
            return _context.abrupt("return", res.status(200).json(productSaved));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProducts = createProducts;

var getProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var getProduct;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Product["default"].find();

          case 2:
            getProduct = _context2.sent;
            return _context2.abrupt("return", res.json(getProduct));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, getProduct;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Product["default"].findById(id);

          case 3:
            getProduct = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(getProduct));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getProductById = getProductById;

var updateProductById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, productById, updateProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Product["default"].findById(id)["catch"](function (error) {
              return console.log("error");
            });

          case 3:
            productById = _context4.sent;

            if (productById) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.status(404).json("The product not found"));

          case 6:
            _context4.next = 8;
            return _Product["default"].findByIdAndUpdate(id, req.body, {
              "new": true
            });

          case 8:
            updateProduct = _context4.sent;
            return _context4.abrupt("return", res.status(200).json(updateProduct));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateProductById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, productById;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Product["default"].findById(id)["catch"](function (error) {
              return console.log("error");
            });

          case 3:
            productById = _context5.sent;

            if (productById) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", res.status(404).json("The product not found"));

          case 6:
            _context5.next = 8;
            return _Product["default"].findByIdAndDelete(id);

          case 8:
            return _context5.abrupt("return", res.status(200).json("The product is delete"));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;