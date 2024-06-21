"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDMonthYYYY = void 0;
const get_month_1 = require("./get-month");
const getDMonthYYYY = (date, sub) => {
    const day = date.getDate();
    const month = (0, get_month_1.getMonth)(date, sub);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`; // `D Month YYYY`
};
exports.getDMonthYYYY = getDMonthYYYY;
