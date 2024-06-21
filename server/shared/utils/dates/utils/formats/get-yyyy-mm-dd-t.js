"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYYYYMMDDt = void 0;
const with_zero_1 = require("../../with-zero");
const getYYYYMMDDt = (date) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, with_zero_1.withZero)(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${year}-${month}-${day}`; // `YYYY-MM-DD`
};
exports.getYYYYMMDDt = getYYYYMMDDt;
