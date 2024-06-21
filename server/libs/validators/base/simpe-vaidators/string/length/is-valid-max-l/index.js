"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noValidMaxL1000 = exports.noValidMaxL500 = exports.noValidMaxL300 = exports.noValidMaxL100 = exports.noValidMaxL50 = exports.noValidMaxL30 = exports.noValidMaxL = exports.isValidMaxL1000 = exports.isValidMaxL500 = exports.isValidMaxL300 = exports.isValidMaxL100 = exports.isValidMaxL50 = exports.isValidMaxL30 = exports.isValidMaxL = void 0;
// v. 02-04-2023
const is_str_1 = require("../../is-str");
/**
 * DEPRECATED 2023-05-08
 * True  if str <= maxLength
 * False if not string | > maxLength
 */
const isValidMaxL = (maxLength, str) => {
    if (!str && (0, is_str_1.isNotStr)(str))
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
const noValidMaxL = (maxLength, str) => !(0, exports.isValidMaxL)(maxLength, str);
exports.noValidMaxL = noValidMaxL;
const noValidMaxL30 = (str) => !(0, exports.isValidMaxL)(30, str);
exports.noValidMaxL30 = noValidMaxL30;
const noValidMaxL50 = (str) => !(0, exports.isValidMaxL)(50, str);
exports.noValidMaxL50 = noValidMaxL50;
const noValidMaxL100 = (str) => !(0, exports.isValidMaxL)(100, str);
exports.noValidMaxL100 = noValidMaxL100;
const noValidMaxL300 = (str) => !(0, exports.isValidMaxL)(300, str);
exports.noValidMaxL300 = noValidMaxL300;
const noValidMaxL500 = (str) => !(0, exports.isValidMaxL)(500, str);
exports.noValidMaxL500 = noValidMaxL500;
const noValidMaxL1000 = (str) => !(0, exports.isValidMaxL)(1000, str);
exports.noValidMaxL1000 = noValidMaxL1000;
