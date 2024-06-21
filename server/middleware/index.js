"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const router_1 = __importDefault(require("./router"));
function default_1(app) {
    app.use((0, koa_bodyparser_1.default)());
    app.use(router_1.default.routes());
}
