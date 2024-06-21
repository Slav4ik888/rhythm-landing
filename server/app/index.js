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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const loggers_1 = require("../libs/loggers");
const middleware_1 = __importDefault(require("../middleware"));
require("../shared/utils/dotenv");
const cors_1 = __importDefault(require("@koa/cors"));
const app = new koa_1.default();
// Настройка CORS
app.use((0, cors_1.default)({
    origin: '*', // Разрешить все домены. Измените на свой домен для повышения безопасности
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    allowHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
}));
app.use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (err) {
        loggers_1.loggerServer.error(`[Server]: ${JSON.stringify(err)}`); // (err, null, 2)}`);
        if (err.status) {
            ctx.status = err.status;
            ctx.body = { error: err.message };
        }
        else {
            console.error(err);
            ctx.status = 500;
            ctx.body = { error: 'Internal server error' };
        }
    }
}));
(0, middleware_1.default)(app);
exports.default = app;
