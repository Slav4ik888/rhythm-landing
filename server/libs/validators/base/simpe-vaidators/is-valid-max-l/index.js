"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotValidMaxL1000 = exports.isNotValidMaxL500 = exports.isNotValidMaxL300 = exports.isNotValidMaxL100 = exports.isNotValidMaxL50 = exports.isNotValidMaxL30 = exports.isNotValidMaxL = exports.isValidMaxL1000 = exports.isValidMaxL500 = exports.isValidMaxL300 = exports.isValidMaxL100 = exports.isValidMaxL50 = exports.isValidMaxL30 = exports.isValidMaxL = void 0;
// v. 02-04-2023
const string_1 = require("../string");
/**
 * True  if str <= maxLength
 * False if not string | > maxLength
 */
const isValidMaxL = (maxLength, str) => {
    if (!str && (0, string_1.isNotStr)(str))
        return false;
    if ((str === null || str === void 0 ? void 0 : str.length) < maxLength || (str === null || str === void 0 ? void 0 : str.length) === maxLength)
        return true;
    return false; // console.log(`Нет совпадений по условиям...`);
};
exports.isValidMaxL = isValidMaxL;
const isValidMaxL30 = (str) => (0, exports.isValidMaxL)(30, str);
exports.isValidMaxL30 = isValidMaxL30;
const isValidMaxL50 = (str) => (0, exports.isValidMaxL)(50, str);
exports.isValidMaxL50 = isValidMaxL50;
const isValidMaxL100 = (str) => (0, exports.isValidMaxL)(100, str);
exports.isValidMaxL100 = isValidMaxL100;
const isValidMaxL300 = (str) => (0, exports.isValidMaxL)(300, str);
exports.isValidMaxL300 = isValidMaxL300;
const isValidMaxL500 = (str) => (0, exports.isValidMaxL)(500, str);
exports.isValidMaxL500 = isValidMaxL500;
const isValidMaxL1000 = (str) => (0, exports.isValidMaxL)(1000, str);
exports.isValidMaxL1000 = isValidMaxL1000;
const isNotValidMaxL = (maxLength, str) => !(0, exports.isValidMaxL)(maxLength, str);
exports.isNotValidMaxL = isNotValidMaxL;
const isNotValidMaxL30 = (str) => !(0, exports.isValidMaxL)(30, str);
exports.isNotValidMaxL30 = isNotValidMaxL30;
const isNotValidMaxL50 = (str) => !(0, exports.isValidMaxL)(50, str);
exports.isNotValidMaxL50 = isNotValidMaxL50;
const isNotValidMaxL100 = (str) => !(0, exports.isValidMaxL)(100, str);
exports.isNotValidMaxL100 = isNotValidMaxL100;
const isNotValidMaxL300 = (str) => !(0, exports.isValidMaxL)(300, str);
exports.isNotValidMaxL300 = isNotValidMaxL300;
const isNotValidMaxL500 = (str) => !(0, exports.isValidMaxL)(500, str);
exports.isNotValidMaxL500 = isNotValidMaxL500;
const isNotValidMaxL1000 = (str) => !(0, exports.isValidMaxL)(1000, str);
exports.isNotValidMaxL1000 = isNotValidMaxL1000;
