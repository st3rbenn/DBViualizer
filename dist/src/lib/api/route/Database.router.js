"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Database_controller_1 = require("../controller/Database.controller");
var DatabaseRouter = (0, express_1.default)();
DatabaseRouter.post('/db-connect', Database_controller_1.connectToDatabase);
DatabaseRouter.get('/databases', Database_controller_1.retrieveAllDatabase);
DatabaseRouter.get('/disconnect', Database_controller_1.disconnectDatabase);
exports.default = DatabaseRouter;
