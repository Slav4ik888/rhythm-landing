"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemFromArrByTwoField = getItemFromArrByTwoField;
/**
 * Возвращает item by two values
 */
function getItemFromArrByTwoField(arr, fieldFirst, valueFirst, fieldSecond, valueSecond) {
    if (!fieldFirst || !fieldSecond)
        return undefined;
    return arr === null || arr === void 0 ? void 0 : arr.find((item) => (item === null || item === void 0 ? void 0 : item[fieldFirst]) === valueFirst &&
        (item === null || item === void 0 ? void 0 : item[fieldSecond]) === valueSecond);
}
;
