"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastDigit = void 0;
const validators_1 = require("../../../../libs/validators");
/**
 * v.2023-06-22
 * Returns the last digit in a number
 */
const getLastDigit = (num, needTwoDigit) => {
    if ((0, validators_1.isNotNum)(num) || num < 10)
        return num;
    const div = needTwoDigit ? 100 : 10;
    return Math.round((num / div - Math.floor(num / div)) * div);
};
exports.getLastDigit = getLastDigit;
