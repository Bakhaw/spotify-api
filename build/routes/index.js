"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("./auth"));
var _albums = _interopRequireDefault(require("./albums"));
var _artists = _interopRequireDefault(require("./artists"));
var _me = _interopRequireDefault(require("./me"));
var _player = _interopRequireDefault(require("./player"));
var _playlists = _interopRequireDefault(require("./playlists"));
var _search = _interopRequireDefault(require("./search"));
var _top = _interopRequireDefault(require("./top"));
var _tracks = _interopRequireDefault(require("./tracks"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send({
    message: 'Welcome on Spotify API !'
  });
});
router.use(_auth["default"]);
router.use(_albums["default"]);
router.use(_artists["default"]);
router.use(_me["default"]);
router.use(_playlists["default"]);
router.use('/player', _player["default"]);
router.use(_player["default"]);
router.use(_search["default"]);
router.use(_top["default"]);
router.use(_tracks["default"]);
var _default = router;
exports["default"] = _default;