"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNumber = toNumber;
const replacers_1 = require("../replacers");
function toNumber(str) {
    if (typeof str === `number`)
        return str || 0; // if NaN
    if (typeof str !== `string`)
        return 0;
    if (!str)
        return 0;
    const dot = (0, replacers_1.commaToDot)(str);
    const spa = (0, replacers_1.delSpace)(dot);
    const num = parseFloat(spa);
    if (!num)
        return 0;
    return num;
}
;
