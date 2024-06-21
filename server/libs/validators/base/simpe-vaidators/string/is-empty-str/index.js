"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotEmptyStr = exports.isEmptyStr = void 0;
const isEmptyStr = (str) => {
    if (typeof str !== 'string')
        return true;
    if (!str || str.trim() === '')
        return true;
    else
        return false;
};
exports.isEmptyStr = isEmptyStr;
const isNotEmptyStr = (str) => !(0, exports.isEmptyStr)(str);
exports.isNotEmptyStr = isNotEmptyStr;
