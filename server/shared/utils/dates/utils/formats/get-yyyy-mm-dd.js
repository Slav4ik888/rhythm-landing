"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYYYYMMDD = void 0;
const with_zero_1 = require("../../with-zero");
const getYYYYMMDD = (date) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, with_zero_1.withZero)(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${year}${month}${day}`; // `YYYYMMDD`
};
exports.getYYYYMMDD = getYYYYMMDD;
