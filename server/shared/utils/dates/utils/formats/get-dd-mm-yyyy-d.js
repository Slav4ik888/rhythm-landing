"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDDMMYYYYd = void 0;
const with_zero_1 = require("../../with-zero");
const getDDMMYYYYd = (date) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, with_zero_1.withZero)(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}.${month}.${year}`; // `DD.MM.YYYY`
};
exports.getDDMMYYYYd = getDDMMYYYYd;
