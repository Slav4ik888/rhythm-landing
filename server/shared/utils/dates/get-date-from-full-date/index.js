"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateFromFullDate = exports.getTimeFromFullDate = void 0;
exports.getDateTime = getDateTime;
const getTimeFromFullDate = (date) => {
    if (!date)
        return ``;
    return date.slice(-5);
};
exports.getTimeFromFullDate = getTimeFromFullDate;
const getDateFromFullDate = (date) => {
    if (!date)
        return ``;
    const year = date.slice(2, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return day + `.` + month + `.` + year;
};
exports.getDateFromFullDate = getDateFromFullDate;
function getDateTime(_date) {
    if (!_date)
        return ``;
    const date = (0, exports.getDateFromFullDate)(_date);
    const time = (0, exports.getTimeFromFullDate)(_date);
    return (date + ` ` + time).trim();
}
// console.log(`getTimeFromFullDate: `, getTimeFromFullDate(`2021-10-02T10:00`));
// console.log(`getDateFromFullDate: `, getDateFromFullDate(`2021-10-02T10:00`));
