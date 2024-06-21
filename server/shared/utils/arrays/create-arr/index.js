"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createArr = createArr;
const validators_1 = require("../../../../libs/validators");
/**
 * v.2023-07-30
 * Create array for mocks
 */
function createArr(length, fillItem) {
    if (!length)
        return [];
    return new Array(length)
        .fill(0)
        .map((_) => {
        if (!fillItem)
            return '-';
        if ((0, validators_1.isObj)(fillItem))
            return Object.assign({}, fillItem);
        return fillItem;
    });
}
