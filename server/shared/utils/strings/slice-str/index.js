"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceStr1000 = exports.sliceStr300 = exports.sliceStr30 = exports.sliceStr = void 0;
/** Возвращает обрезанную строку заданной длины */
const sliceStr = (maxLength, str) => {
    let newStr = String(str) || '';
    if ((newStr === null || newStr === void 0 ? void 0 : newStr.length) > maxLength)
        newStr = newStr.slice(0, maxLength);
    return newStr;
};
exports.sliceStr = sliceStr;
const sliceStr30 = (str) => (0, exports.sliceStr)(30, str);
exports.sliceStr30 = sliceStr30;
const sliceStr300 = (str) => (0, exports.sliceStr)(300, str);
exports.sliceStr300 = sliceStr300;
const sliceStr1000 = (str) => (0, exports.sliceStr)(1000, str);
exports.sliceStr1000 = sliceStr1000;
