"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
const __1 = require("..");
// Validate
const isNoCorrect = (ms) => !ms || ms < 0 || typeof ms !== 'number';
/**
 * v.2023-04-28
 * Возвращаем дату от time в нужном формате
 * @return {string} - дата в нужном формате
 */
function formatDate(_ms, // таймстамп
format, // формат, в котором нужно вернуть ms
sub = __1.SUB.EN) {
    let date;
    if (Date.parse(_ms))
        date = new Date(_ms);
    else {
        const ms = parseInt(_ms);
        if (isNoCorrect(ms))
            return 'Указана некорректная дата';
        date = new Date(ms);
    }
    switch (format) {
        case __1.FORMAT.Month: return (0, __1.getMonth)(date, sub);
        case __1.FORMAT.MonthYYYY: return (0, __1.getMonthYYYY)(date, sub);
        case __1.FORMAT.MonthDDсYYYY: return (0, __1.getMonthDDсYYYY)(date, sub);
        case __1.FORMAT.DDMonthYYYY: return (0, __1.getDDMonthYYYY)(date, sub);
        case __1.FORMAT.DMonthYYYY: return (0, __1.getDMonthYYYY)(date, sub);
        case __1.FORMAT.DMonthYYYYHHMM: return (0, __1.getDMonthYYYYHHMM)(date, sub);
        case __1.FORMAT.YYYYMMDDt: return (0, __1.getYYYYMMDDt)(date);
        case __1.FORMAT.YYYYMMDD: return (0, __1.getYYYYMMDD)(date);
        case __1.FORMAT.DDMMYYYYt: return (0, __1.getDDMMYYYYt)(date);
        case __1.FORMAT.DDMMYYYYd: return (0, __1.getDDMMYYYYd)(date);
        case __1.FORMAT.DDMMYYdHHMM: return (0, __1.getDDMMYYdHHMM)(date);
        case __1.FORMAT.HHMM: return (0, __1.getHHMM)(date);
        default: return String(date);
    }
}
;
