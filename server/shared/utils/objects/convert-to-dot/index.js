"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToDot = convertToDot;
const validators_1 = require("../../../../libs/validators");
const __1 = require("..");
/**
 * v.2023-05-19
 * Convert object to dot notation like this
 * @example { first: { second: { third: 'field' }}} => { 'first.second.third': 'field' }
 */
function convertToDot(obj) {
    if (!obj || (0, __1.empty)(obj))
        return {};
    const newObj = {};
    checkAndConvert(obj, newObj);
    return newObj;
}
function checkAndConvert(obj, newObj, prevScheme = '') {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key], scheme = prevScheme ? `${prevScheme}.${key}` : key;
            if ((0, validators_1.isObj)(value)) {
                checkAndConvert(value, newObj, scheme);
            }
            else {
                // @ts-ignore
                newObj[scheme] = value;
            }
        }
    }
}
