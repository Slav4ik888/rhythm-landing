"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotValidNumberL20 = exports.isNotValidNumberL7 = exports.isValidNumberL20 = exports.isValidNumberL7 = exports.isValidNumberL = void 0;
/**
 * Возвращает true если строка с цифрами установленного значения length
 */
const isValidNumberL = (length, strNum // стока из цифр
) => {
    if (strNum === undefined)
        return false;
    if (typeof strNum !== 'string')
        return false;
    if (strNum.replace(/\D/, '').length !== strNum.length ||
        strNum.replace(/\D/, '').length !== length)
        return false;
    return true;
};
exports.isValidNumberL = isValidNumberL;
const isValidNumberL7 = (str) => (0, exports.isValidNumberL)(7, str);
exports.isValidNumberL7 = isValidNumberL7;
const isValidNumberL20 = (str) => (0, exports.isValidNumberL)(20, str);
exports.isValidNumberL20 = isValidNumberL20;
const isNotValidNumberL7 = (str) => !(0, exports.isValidNumberL)(7, str);
exports.isNotValidNumberL7 = isNotValidNumberL7;
const isNotValidNumberL20 = (str) => !(0, exports.isValidNumberL)(20, str);
exports.isNotValidNumberL20 = isNotValidNumberL20;
