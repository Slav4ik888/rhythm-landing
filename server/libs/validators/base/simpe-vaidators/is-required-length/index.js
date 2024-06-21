"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRequiredLength = void 0;
const is_undefined_1 = require("../is-undefined");
/** True if Str.length === mustLength */
const isRequiredLength = (str, mustLength) => {
    if ((0, is_undefined_1.isUndefined)(str) || (0, is_undefined_1.isUndefined)(mustLength))
        return false;
    if (str.length === mustLength)
        return true;
    return false;
};
exports.isRequiredLength = isRequiredLength;
