"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotBool = exports.isBool = void 0;
const isBool = (bool) => typeof bool === 'boolean';
exports.isBool = isBool;
const isNotBool = (bool) => !(0, exports.isBool)(bool);
exports.isNotBool = isNotBool;
