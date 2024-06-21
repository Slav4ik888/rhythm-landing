"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
/** If str => JSON.parse else return '' */
const parse = (str) => str ? JSON.parse(str) : '';
exports.parse = parse;
