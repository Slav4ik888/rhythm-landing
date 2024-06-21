"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHHMM = void 0;
const with_zero_1 = require("../../with-zero");
const getHHMM = (date) => {
    const hours = (0, with_zero_1.withZero)(date.getHours());
    const mins = (0, with_zero_1.withZero)(date.getMinutes());
    return `${hours}:${mins}`; // `HH:MM`
};
exports.getHHMM = getHHMM;
