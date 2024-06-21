"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrsEqual = isArrsEqual;
const validators_1 = require("../../../../libs/validators");
/** Returns true if arr1 == arr2 */
function isArrsEqual(arr1, arr2) {
    if (!(0, validators_1.isArr)(arr1) || !(0, validators_1.isArr)(arr2))
        return false;
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((item, idx) => {
        if ((0, validators_1.isObj)(item))
            return JSON.stringify(item) === JSON.stringify(arr2[idx]);
        else if ((0, validators_1.isArr)(item))
            return isArrsEqual(item, arr2[idx]);
        return item === arr2[idx];
    });
}
;
