"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

_mongoose["default"].connect(_config["default"].DB_CONNECTION, {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log("DB is connect");
})["catch"](function (error) {
  return console.log("Error in connection");
});