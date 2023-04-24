"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Database_router_1 = __importDefault(require("./route/Database.router"));
var Router = (0, express_1.default)();
Router.use('/DB', Database_router_1.default);
exports.default = Router;
