/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/server.tsx":
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/index */ \"./src/index.tsx\");\n/* harmony import */ var _src_lib_api_Router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/api/Router */ \"./src/lib/api/Router.ts\");\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar PORT = process.env.PORT || 3000;\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().resolve(__dirname, 'dist')));\n\n//cors middleware\napp.use(function (req, res, next) {\n  //Enabling CORS\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');\n  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization');\n  next();\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use('/api/v/0.1.0', _src_lib_api_Router__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.get('*', function (req, res) {\n  var appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)); // Remplacez \"App\" par le nom de votre composant principal\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_1___default().resolve('./dist/index.html'); // Assurez-vous que le chemin d'accès correspond à l'emplacement du fichier index.html généré\n\n  fs__WEBPACK_IMPORTED_MODULE_2___default().readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Error reading index.html:', err);\n      return res.status(500).send('Error reading index.html');\n    }\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(appHtml, \"</div> <br /> <script src=\\\"/client.js\\\"></script>\")));\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://my-webpack-project/./server/server.tsx?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Service_apiService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Service/apiService */ \"./src/Service/apiService.ts\");\n\n\n\n\n\nfunction App() {\n  var handleClick = /*#__PURE__*/function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            event.preventDefault();\n            _context.next = 3;\n            return (0,_Service_apiService__WEBPACK_IMPORTED_MODULE_4__.post)('DB/db-connect', {\n              host: 'localhost',\n              port: 8889,\n              user: 'root',\n              password: 'root'\n            });\n          case 3:\n            res = _context.sent;\n            console.log(res);\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function handleClick(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  var handleClick2 = /*#__PURE__*/function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(event) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            event.preventDefault();\n            _context2.next = 3;\n            return (0,_Service_apiService__WEBPACK_IMPORTED_MODULE_4__.get)('DB/databases');\n          case 3:\n            res = _context2.sent;\n            console.log(res);\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2);\n    }));\n    return function handleClick2(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n    justify: \"center\",\n    align: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n    span: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    onClick: function onClick(event) {\n      return handleClick(event);\n    }\n  }, \"Connect MySQL\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {\n    span: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    onClick: function onClick(event) {\n      return handleClick2(event);\n    }\n  }, \"Show Database\")));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-webpack-project/./src/App.tsx?");

/***/ }),

/***/ "./src/Service/apiService.ts":
/*!***********************************!*\
  !*** ./src/Service/apiService.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"del\": () => (/* binding */ del),\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"post\": () => (/* binding */ post),\n/* harmony export */   \"put\": () => (/* binding */ put)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar apiClient = axios__WEBPACK_IMPORTED_MODULE_2___default().create({\n  baseURL: 'http://localhost:3000/api/v/0.1.0/',\n  headers: {\n    'Content-Type': 'application/json'\n  }\n});\nfunction get(_x) {\n  return _get.apply(this, arguments);\n}\nfunction _get() {\n  _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint) {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return apiClient.get(endpoint);\n        case 2:\n          response = _context.sent;\n          return _context.abrupt(\"return\", response.data);\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return _get.apply(this, arguments);\n}\nfunction post(_x2, _x3) {\n  return _post.apply(this, arguments);\n}\nfunction _post() {\n  _post = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(endpoint, data) {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return apiClient.post(endpoint, data);\n        case 2:\n          response = _context2.sent;\n          return _context2.abrupt(\"return\", response.data);\n        case 4:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2);\n  }));\n  return _post.apply(this, arguments);\n}\nfunction put(_x4, _x5) {\n  return _put.apply(this, arguments);\n}\nfunction _put() {\n  _put = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(endpoint, data) {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return apiClient.put(endpoint, data);\n        case 2:\n          response = _context3.sent;\n          return _context3.abrupt(\"return\", response.data);\n        case 4:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3);\n  }));\n  return _put.apply(this, arguments);\n}\nfunction del(_x6) {\n  return _del.apply(this, arguments);\n}\nfunction _del() {\n  _del = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(endpoint) {\n    var response;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return apiClient.delete(endpoint);\n        case 2:\n          response = _context4.sent;\n          return _context4.abrupt(\"return\", response.data);\n        case 4:\n        case \"end\":\n          return _context4.stop();\n      }\n    }, _callee4);\n  }));\n  return _del.apply(this, arguments);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/Service/apiService.ts?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar theme = {\n  colorScheme: 'dark',\n  components: {\n    Button: {\n      styles: {\n        root: {\n          backgroundColor: '#144272',\n          ':hover': {\n            backgroundColor: '#0A2647'\n          }\n        }\n      }\n    }\n  }\n};\nvar Index = function Index() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.MantineProvider, {\n    withGlobalStyles: true,\n    withNormalizeCSS: true,\n    theme: theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n// ReactDOM.render(\n//   <React.StrictMode>\n//     <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>\n//       <App />\n//     </MantineProvider>\n//   </React.StrictMode>,\n//   document.getElementById('root'),\n// );\n\n//# sourceURL=webpack://my-webpack-project/./src/index.tsx?");

/***/ }),

/***/ "./src/lib/api/Router.ts":
/*!*******************************!*\
  !*** ./src/lib/api/Router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _route_Database_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route/Database.router */ \"./src/lib/api/route/Database.router.ts\");\n\n\nvar Router = express__WEBPACK_IMPORTED_MODULE_0___default()();\nRouter.use('/DB', _route_Database_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/api/Router.ts?");

/***/ }),

/***/ "./src/lib/api/controller/Database.controller.ts":
/*!*******************************************************!*\
  !*** ./src/lib/api/controller/Database.controller.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => (/* binding */ HelloWorld),\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase),\n/* harmony export */   \"retrieveAllDatabase\": () => (/* binding */ retrieveAllDatabase)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _database_DBConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/DBConnection */ \"./src/lib/database/DBConnection.ts\");\n\n\n\nvar HelloWorld = function HelloWorld(req, res) {\n  return res.status(200).json({\n    message: 'helloWorld::-)'\n  });\n};\nvar connectToDatabase = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var _req$body, host, port, user, password, dbCredentials, dbInstance;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _req$body = req.body, host = _req$body.host, port = _req$body.port, user = _req$body.user, password = _req$body.password;\n          _context.prev = 1;\n          dbCredentials = {\n            host: host,\n            port: port,\n            user: user,\n            password: password\n          };\n          dbInstance = _database_DBConnection__WEBPACK_IMPORTED_MODULE_2__.DBConnection.getInstance(dbCredentials);\n          _context.next = 6;\n          return dbInstance.connect();\n        case 6:\n          return _context.abrupt(\"return\", res.status(200).json({\n            message: 'Connected ✅'\n          }));\n        case 9:\n          _context.prev = 9;\n          _context.t0 = _context[\"catch\"](1);\n          console.log(_context.t0);\n          return _context.abrupt(\"return\", res.status(500).json({\n            message: 'error connecting to database',\n            error: _context.t0\n          }));\n        case 13:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[1, 9]]);\n  }));\n  return function connectToDatabase(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar retrieveAllDatabase = /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {\n    var dbInstance, query, result;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.prev = 0;\n          dbInstance = _database_DBConnection__WEBPACK_IMPORTED_MODULE_2__.DBConnection.getInstance();\n          if (dbInstance) {\n            _context2.next = 4;\n            break;\n          }\n          return _context2.abrupt(\"return\", res.status(404).json({\n            message: 'error connecting to database',\n            error: 'no database instance found'\n          }));\n        case 4:\n          query = 'SHOW DATABASES';\n          _context2.next = 7;\n          return dbInstance.executeQuery(query);\n        case 7:\n          result = _context2.sent;\n          return _context2.abrupt(\"return\", res.status(200).json({\n            message: 'Retrieved all databases ✅',\n            result: result\n          }));\n        case 11:\n          _context2.prev = 11;\n          _context2.t0 = _context2[\"catch\"](0);\n          console.log(_context2.t0);\n          return _context2.abrupt(\"return\", res.status(500).json({\n            message: 'error retrieving all databases',\n            error: _context2.t0\n          }));\n        case 15:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[0, 11]]);\n  }));\n  return function retrieveAllDatabase(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/api/controller/Database.controller.ts?");

/***/ }),

/***/ "./src/lib/api/route/Database.router.ts":
/*!**********************************************!*\
  !*** ./src/lib/api/route/Database.router.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_Database_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/Database.controller */ \"./src/lib/api/controller/Database.controller.ts\");\n\n\nvar DatabaseRouter = express__WEBPACK_IMPORTED_MODULE_0___default()();\nDatabaseRouter.post('/db-connect', _controller_Database_controller__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase);\nDatabaseRouter.get('/databases', _controller_Database_controller__WEBPACK_IMPORTED_MODULE_1__.retrieveAllDatabase);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatabaseRouter);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/api/route/Database.router.ts?");

/***/ }),

/***/ "./src/lib/database/DBConnection.ts":
/*!******************************************!*\
  !*** ./src/lib/database/DBConnection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DBConnection\": () => (/* binding */ DBConnection)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar DBConnection = /*#__PURE__*/function () {\n  function DBConnection(credentials) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DBConnection);\n    DBConnection.host = credentials.host;\n    DBConnection.user = credentials.user;\n    DBConnection.password = credentials.password;\n    DBConnection.port = credentials.port;\n    DBConnection.pool = (0,mysql2_promise__WEBPACK_IMPORTED_MODULE_6__.createPool)({\n      host: DBConnection.host,\n      user: DBConnection.user,\n      password: DBConnection.password,\n      port: DBConnection.port,\n      waitForConnections: true,\n      connectionLimit: 10,\n      queueLimit: 0\n    });\n  }\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(DBConnection, [{\n    key: \"connect\",\n    value: function () {\n      var _connect = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              console.log('Connecting to database... 😴');\n              _context.next = 3;\n              return DBConnection.pool.getConnection();\n            case 3:\n              DBConnection.connection = _context.sent;\n              console.log('Connected to database 😎');\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      function connect() {\n        return _connect.apply(this, arguments);\n      }\n      return connect;\n    }()\n  }, {\n    key: \"closeConnection\",\n    value: function () {\n      var _closeConnection = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              DBConnection.connection.release();\n            case 1:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      function closeConnection() {\n        return _closeConnection.apply(this, arguments);\n      }\n      return closeConnection;\n    }()\n  }, {\n    key: \"closePool\",\n    value: function () {\n      var _closePool = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {\n          while (1) switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return DBConnection.pool.end();\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }, _callee3);\n      }));\n      function closePool() {\n        return _closePool.apply(this, arguments);\n      }\n      return closePool;\n    }()\n  }, {\n    key: \"executeQuery\",\n    value: function () {\n      var _executeQuery = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4(query, params) {\n        var _yield$DBConnection$c, _yield$DBConnection$c2, rows;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context4) {\n          while (1) switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.next = 2;\n              return DBConnection.connection.execute(query, params);\n            case 2:\n              _yield$DBConnection$c = _context4.sent;\n              _yield$DBConnection$c2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$DBConnection$c, 1);\n              rows = _yield$DBConnection$c2[0];\n              return _context4.abrupt(\"return\", rows);\n            case 6:\n            case \"end\":\n              return _context4.stop();\n          }\n        }, _callee4);\n      }));\n      function executeQuery(_x, _x2) {\n        return _executeQuery.apply(this, arguments);\n      }\n      return executeQuery;\n    }()\n  }, {\n    key: \"getAllDatabaseNames\",\n    value: function () {\n      var _getAllDatabaseNames = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee5() {\n        var _yield$DBConnection$p, _yield$DBConnection$p2, rows;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee5$(_context5) {\n          while (1) switch (_context5.prev = _context5.next) {\n            case 0:\n              _context5.next = 2;\n              return DBConnection.pool.execute('SHOW DATABASES');\n            case 2:\n              _yield$DBConnection$p = _context5.sent;\n              _yield$DBConnection$p2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$DBConnection$p, 1);\n              rows = _yield$DBConnection$p2[0];\n              console.log(rows);\n              return _context5.abrupt(\"return\", rows.map(function (row) {\n                return row.Database;\n              }));\n            case 7:\n            case \"end\":\n              return _context5.stop();\n          }\n        }, _callee5);\n      }));\n      function getAllDatabaseNames() {\n        return _getAllDatabaseNames.apply(this, arguments);\n      }\n      return getAllDatabaseNames;\n    }()\n  }], [{\n    key: \"getInstance\",\n    value: function getInstance(credentials) {\n      if (!credentials && !DBConnection.instance) {\n        return null;\n      }\n      if (!DBConnection.instance) {\n        DBConnection.instance = new DBConnection(credentials);\n      }\n      return DBConnection.instance;\n    }\n  }]);\n  return DBConnection;\n}();\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"instance\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"pool\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"connection\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"host\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"user\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"password\", void 0);\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(DBConnection, \"port\", void 0);\n\n//# sourceURL=webpack://my-webpack-project/./src/lib/database/DBConnection.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.tsx");
/******/ 	
/******/ })()
;