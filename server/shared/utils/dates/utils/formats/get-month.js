"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonth = void 0;
const __1 = require("..");
const getMonth = (date, sub) => {
    const idx = date.getMonth();
    switch (sub) {
        case __1.SUB.EN: return `${__1.MONTH_NAME[idx]}`; // `Month`
        case __1.SUB.RU: return `${__1.MONTH_NAME_RU[idx]}`;
        case __1.SUB.RU_DECL: return `${__1.MONTH_NAME_RU_DEC[idx]}`;
        default: return ``;
    }
};
exports.getMonth = getMonth;
