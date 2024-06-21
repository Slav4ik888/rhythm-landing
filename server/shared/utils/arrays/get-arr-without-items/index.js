"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrWithoutItems = getArrWithoutItems;
function isValid(item, field, values) {
    let result = true;
    values.forEach(value => {
        if (item[field] === value)
            result = false;
    });
    return result;
}
function getArrWithoutItems(arr, field, values) {
    if (!(arr === null || arr === void 0 ? void 0 : arr.length) || !field || !(values === null || values === void 0 ? void 0 : values.length))
        return arr;
    return arr.filter(item => isValid(item, field, values));
}
;
