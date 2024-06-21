"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDays = void 0;
const utils_1 = require("../utils");
/** Сколько дней вмещается в промежуток */
const getDays = (period) => {
    if (!period || period < 0)
        return 0;
    const value = (0, utils_1.day)(1);
    return Math.ceil(period / value);
};
exports.getDays = getDays;
