"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthYYYY = void 0;
const get_month_1 = require("./get-month");
const getMonthYYYY = (date, sub) => {
    const month = (0, get_month_1.getMonth)(date, sub);
    const year = date.getFullYear();
    return `${month} ${year}`; // `Month YYYY`
};
exports.getMonthYYYY = getMonthYYYY;
