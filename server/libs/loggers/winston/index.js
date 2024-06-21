"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMail = exports.loggerUsers = exports.loggerServer = void 0;
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
const { createLogger, format, transports } = winston_1.default, { combine, timestamp, label, printf } = format, rootPath = '../../../logs/';
;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const loggerServer = createLogger({
    level: 'info',
    // format: winston.format.json(),
    format: combine(
    // format.json(),
    label({ label: 'server' }), timestamp(), myFormat),
    // defaultMeta: {service: 'course-service'},
    transports: [
        // сюда будут попадать ошибки уровня error
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'errors.log'), level: 'error' }),
        // Сюда будет валиться всё
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'server.log') })
    ]
});
exports.loggerServer = loggerServer;
const loggerUsers = createLogger({
    level: 'info',
    format: combine(label({ label: 'users' }), timestamp(), myFormat),
    transports: [
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'errors.log'), level: 'error' }),
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'users.log') })
    ]
});
exports.loggerUsers = loggerUsers;
const loggerMail = createLogger({
    level: 'info',
    format: combine(label({ label: 'mails' }), timestamp(), myFormat),
    transports: [
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'errors.log'), level: 'error' }),
        new transports.File({ filename: path_1.default.join(__dirname, rootPath, 'mails.log') })
    ]
});
exports.loggerMail = loggerMail;
if (process.env.NODE_ENV !== 'production') {
    loggerServer.add(new transports.Console({ format: combine(format.colorize(), format.simple()) }));
    loggerUsers.add(new transports.Console({ format: combine(format.colorize(), format.simple()) }));
    loggerMail.add(new transports.Console({ format: combine(format.colorize(), format.simple()) }));
}
