"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var react_1 = __importDefault(require("react"));
var server_1 = require("react-dom/server");
var index_1 = __importDefault(require("../src/index"));
var Router_1 = __importDefault(require("../src/lib/api/Router"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.resolve(__dirname, 'dist')));
// CORS middleware
app.use(function (req, res, next) {
    // Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization');
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v/0.1.0', Router_1.default);
app.get('*', function (req, res) {
    var appHtml = (0, server_1.renderToString)(react_1.default.createElement(index_1.default, null));
    var indexFile = path_1.default.resolve('./dist/index.html');
    fs_1.default.readFile(indexFile, 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading index.html:', err);
            return res.status(500).send('Error reading index.html');
        }
        return res.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(appHtml, "</div> <br /> <script src=\"/client.js\"></script>")));
    });
});
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
