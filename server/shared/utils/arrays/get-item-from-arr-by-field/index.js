"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemFromArrByField = getItemFromArrByField;
/**
 * Возвращает item с соответствующим полем field === value
 */
function getItemFromArrByField(arr, field, // `id` || `email` || any
value) {
    return arr === null || arr === void 0 ? void 0 : arr.find((item) => (item === null || item === void 0 ? void 0 : item[field]) === value);
}
