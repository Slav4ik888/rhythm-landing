"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObj = isObj;
exports.isNotObj = isNotObj;
const is_arr_1 = require("../is-arr");
/** True if "o" is object & not Array */
function isObj(o) {
    return o !== null &&
        typeof o === 'object' &&
        !(0, is_arr_1.isArr)(o);
}
function isNotObj(o) {
    return !isObj(o);
}
