"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotLessThan = exports.isLessThan = void 0;
const isLessThan = (str, min) => (str === null || str === void 0 ? void 0 : str.length) < min;
exports.isLessThan = isLessThan;
const isNotLessThan = (str, min) => !(0, exports.isLessThan)(str, min);
exports.isNotLessThan = isNotLessThan;
