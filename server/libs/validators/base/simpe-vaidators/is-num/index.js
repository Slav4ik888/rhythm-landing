"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNum = exports.isNum = void 0;
/** v.2023-06-22 */
const isNum = (num) => typeof num === 'number' &&
    !isNaN(num);
exports.isNum = isNum;
const isNotNum = (num) => !(0, exports.isNum)(num);
exports.isNotNum = isNotNum;
