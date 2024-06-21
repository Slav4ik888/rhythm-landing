"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDMonthYYYYHHMM = void 0;
const with_zero_1 = require("../../with-zero");
const get_month_1 = require("./get-month");
const getDMonthYYYYHHMM = (date, sub) => {
    const day = date.getDate();
    const month = (0, get_month_1.getMonth)(date, sub);
    const year = date.getFullYear();
    const hours = (0, with_zero_1.withZero)(date.getHours());
    const mins = (0, with_zero_1.withZero)(date.getMinutes());
    return `${day} ${month} ${year} ${hours}:${mins}`; // `D Month YYYY HH:MM`
};
exports.getDMonthYYYYHHMM = getDMonthYYYYHHMM;
