"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStrNumber = getStrNumber;
const replacers_1 = require("../replacers");
const add_space_between_numbers_1 = require("../add-space-between-numbers");
/**
 * Для handleChange(e)
 * Возвращает число в строке с разделёнными тысячами
 */
function getStrNumber(value) {
    let str = ``;
    if (!value)
        return ``;
    const valInStr = value.toString();
    for (let i = 0; i < valInStr.length; i++) {
        if ((0, replacers_1.isDotComma)(valInStr[i])) {
            if (!(0, replacers_1.isDotComma)(str))
                str += valInStr[i]; // Comma or Dota must be one
        }
        else
            str += (0, replacers_1.getDigit)(valInStr[i]);
    }
    str = (0, add_space_between_numbers_1.addSpaceBetweenNumbers)((0, replacers_1.commaToDot)(str));
    str = (0, replacers_1.dotToComma)(str);
    return str;
}
;
