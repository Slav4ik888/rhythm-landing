"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDDMMYYdHHMM = void 0;
const with_zero_1 = require("../../with-zero");
const getDDMMYYdHHMM = (date) => {
    const day = (0, with_zero_1.withZero)(date.getDate());
    const month = (0, with_zero_1.withZero)(date.getMonth() + 1);
    const year = date.getFullYear().toString().slice(-2);
    const hours = (0, with_zero_1.withZero)(date.getHours());
    const mins = (0, with_zero_1.withZero)(date.getMinutes());
    return `${day}.${month}.${year} ${hours}:${mins}`; // `DD.MM.YY HH:MM`
};
exports.getDDMMYYdHHMM = getDDMMYYdHHMM;
