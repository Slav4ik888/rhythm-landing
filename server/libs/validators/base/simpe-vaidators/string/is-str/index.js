"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotStr = exports.isStr = void 0;
/** Is typeof string */
const isStr = (str) => typeof str === 'string';
exports.isStr = isStr;
/**
 * v.2023-09-22
 * Is no typeof string
 */
const isNotStr = (str) => !(0, exports.isStr)(str);
exports.isNotStr = isNotStr;
