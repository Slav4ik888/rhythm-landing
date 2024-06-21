"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strWithLength = void 0;
const addSpaces = (str, needSpace) => {
    let newStr = str;
    [...new Array(needSpace)].forEach(() => {
        newStr += ' ';
    });
    return newStr;
};
/**
 * Возвращает строку заданной длины
 */
const strWithLength = (str, length) => {
    if (!str || typeof str !== 'string')
        return str;
    if (typeof length !== 'number')
        return '';
    const needSpace = length - str.length;
    if (needSpace < 0)
        return str.slice(0, length);
    if (!needSpace)
        return str;
    if (needSpace > 0)
        return addSpaces(str, needSpace);
    return '';
};
exports.strWithLength = strWithLength;
