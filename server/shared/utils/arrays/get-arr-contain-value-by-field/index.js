"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrContainValueByField = getArrContainValueByField;
function getArrContainValueByField(arr, field, regexp) {
    return arr.filter(item => regexp.test(item[field]));
}
