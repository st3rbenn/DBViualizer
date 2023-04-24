"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
var promise_1 = require("mysql2/promise");
var DBConnection = /** @class */ (function () {
    function DBConnection(credentials) {
        DBConnection.host = credentials.host;
        DBConnection.user = credentials.user;
        DBConnection.password = credentials.password;
        DBConnection.port = credentials.port;
        DBConnection.pool = (0, promise_1.createPool)({
            host: DBConnection.host,
            user: DBConnection.user,
            password: DBConnection.password,
            port: DBConnection.port,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
        });
    }
    Object.defineProperty(DBConnection, "instance", {
        get: function () {
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "pool", {
        get: function () {
            return this._pool;
        },
        set: function (value) {
            this._pool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "connection", {
        get: function () {
            return this._connection;
        },
        set: function (value) {
            this._connection = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "host", {
        get: function () {
            return this._host;
        },
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DBConnection, "port", {
        get: function () {
            return this._port;
        },
        set: function (value) {
            this._port = value;
        },
        enumerable: false,
        configurable: true
    });
    DBConnection.createInstance = function (credentials) {
        if (!credentials) {
            return null;
        }
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection(credentials);
        }
        return DBConnection.instance;
    };
    DBConnection.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log('Connecting to database... 😴');
                        _a = DBConnection;
                        return [4 /*yield*/, DBConnection.pool.getConnection()];
                    case 1:
                        _a.connection = _b.sent();
                        console.log('Connected to database 😎');
                        return [2 /*return*/];
                }
            });
        });
    };
    DBConnection.prototype.closeConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                DBConnection.connection.release();
                return [2 /*return*/];
            });
        });
    };
    DBConnection.prototype.closePool = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DBConnection.pool.end()];
                    case 1:
                        _a.sent();
                        DBConnection.instance = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    DBConnection.prototype.executeQuery = function (query, params) {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DBConnection.connection.execute(query, params)];
                    case 1:
                        rows = (_a.sent())[0];
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    DBConnection.prototype.getAllDatabaseNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, DBConnection.pool.execute('SHOW DATABASES')];
                    case 1:
                        rows = (_a.sent())[0];
                        return [2 /*return*/, rows.map(function (row) { return row.Database; })];
                }
            });
        });
    };
    DBConnection.checkIfInstanceExists = function () {
        return DBConnection.instance ? true : false;
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
