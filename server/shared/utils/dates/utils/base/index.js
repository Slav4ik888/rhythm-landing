"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneMonth = exports.month = exports.week = exports.oneDay = exports.day = exports.hour = exports.min = exports.sec = void 0;
const sec = (n) => n * 1000;
exports.sec = sec;
const min = (n) => n * (0, exports.sec)(60);
exports.min = min;
const hour = (n = 1) => n * (0, exports.min)(60);
exports.hour = hour;
const day = (n) => n * (0, exports.hour)(24);
exports.day = day;
exports.oneDay = (0, exports.day)(1);
const week = (n) => n * (0, exports.day)(7);
exports.week = week;
const month = (n) => n * (0, exports.day)(30);
exports.month = month;
exports.oneMonth = (0, exports.month)(1);