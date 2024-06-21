"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArr = isArr;
exports.isNotArr = isNotArr;
/** Returns true if arr is Array */
function isArr(arr) {
    return Array.isArray(arr);
}
function isNotArr(arr) {
    return !isArr(arr);
}
