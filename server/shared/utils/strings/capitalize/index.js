"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
const validators_1 = require("../../../../libs/validators");
/**
 * v.2023-06-22
 * Returns
 */
const capitalize = (str, cfg = {}) => {
    if ((0, validators_1.isNotStr)(str))
        return str;
    const { first } = cfg;
    if (first)
        return str[0].toLocaleUpperCase() + str.slice(1);
    else
        return str.toLocaleUpperCase();
};
exports.capitalize = capitalize;
