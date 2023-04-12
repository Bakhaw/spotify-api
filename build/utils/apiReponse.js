"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiResponse = apiResponse;
function apiResponse(_ref) {
  var data = _ref.data,
    error = _ref.error,
    status = _ref.status;
  var response = {
    data: data,
    error: error,
    status: status
  };
  return response;
}