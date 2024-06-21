"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDDMonthYYYY = void 0;
const with_zero_1 = require("../../with-zero");
const get_month_1 = require("./get-month");
const getDDMonthYYYY = (date, sub) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, get_month_1.getMonth)(date, sub);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`; // `DD Month YYYY`
};
exports.getDDMonthYYYY = getDDMonthYYYY;
