"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOneOfSeveral = isOneOfSeveral;
exports.isNotOneOfSeveral = isNotOneOfSeveral;
/**
 * v.2023-05-09
 * Является value одним из массива (only simple values - extends string)
 */
function isOneOfSeveral(arr, value) {
    return Boolean(arr === null || arr === void 0 ? void 0 : arr.find((item) => item === value));
}
/**
 * v.2023-05-09
 * Не является value одним из массива (only simple values - extends string)
 */
function isNotOneOfSeveral(arr, value) {
    return Boolean(!isOneOfSeveral(arr, value));
}
