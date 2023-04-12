"use strict";

var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _serverlessHttp = _interopRequireDefault(require("serverless-http"));
var _config = _interopRequireDefault(require("./config"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _cookieParser["default"])());
app.use(_routes["default"]);
app.listen(_config["default"].PORT, function () {
  console.log("Server running on port ".concat(_config["default"].PORT, " ..."));
});
module.exports.handler = (0, _serverlessHttp["default"])(app);