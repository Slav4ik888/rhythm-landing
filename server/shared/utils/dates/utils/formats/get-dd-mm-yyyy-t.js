"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDDMMYYYYt = void 0;
const with_zero_1 = require("../../with-zero");
const getDDMMYYYYt = (date) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, with_zero_1.withZero)(date.getMonth() + 1);
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // `DD-MM-YYYY`
};
exports.getDDMMYYYYt = getDDMMYYYYt;
