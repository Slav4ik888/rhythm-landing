"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemByPos = void 0;
const validators_1 = require("../../../../libs/validators");
/**
 * Example:
 *  - str: 'get.third.item.from.this.text'
 *
 *  - splitter: '.'
 *
 *  - pos: 'third'
 *
 * **result** => 'item'
 * @param str
 * @param splitter - string: '.' | ',' | '/'
 * @param pos - first = 0, second = 1
 */
const getItemByPos = (str, splitter, pos) => {
    if (!str || (0, validators_1.isNotStr)(str))
        return undefined;
    if (!splitter)
        return str;
    if ((0, validators_1.isUndefined)(pos) || (!pos && pos !== 0))
        return str;
    const res = str.split(splitter) || [];
    if ((0, validators_1.isNum)(pos))
        return res[pos];
    const l = res.length;
    switch (pos) {
        case 'first': return res[0];
        case 'second': return res[1];
        case 'third': return res[2];
        case 'prev-prev': return res[l - 3];
        case 'prev': return res[l - 2];
        case 'last': return res[l - 1];
        default: return undefined;
    }
};
exports.getItemByPos = getItemByPos;
