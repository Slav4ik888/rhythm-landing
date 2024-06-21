"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotMoreThan = exports.isMoreThan = void 0;
const isMoreThan = (str, max) => (str === null || str === void 0 ? void 0 : str.length) > max;
exports.isMoreThan = isMoreThan;
const isNotMoreThan = (str, max) => !(0, exports.isMoreThan)(str, max);
exports.isNotMoreThan = isNotMoreThan;
