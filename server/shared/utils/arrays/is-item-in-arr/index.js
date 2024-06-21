"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isItemInArr = isItemInArr;
/**
 * Возвращает true если item находится в arr
 */
function isItemInArr(arr, item) {
    if (!(arr === null || arr === void 0 ? void 0 : arr.length))
        return false;
    return Boolean(arr.find(it => it === item));
}
;
