"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../utils/consts");
;
;
const arr = [
    [{ ms: undefined, format: consts_1.FORMAT.Month }, `Указана некорректная дата`],
    [{ ms: null, format: consts_1.FORMAT.Month }, `Указана некорректная дата`],
    [{ ms: 0, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: `-1`, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: -1, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: `123`, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: `1640995200000`, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: `Sat Jan 01 2022 19:29:31 GMT+0800 (Иркутск, стандартное время)`, format: consts_1.FORMAT.Month }, `January`],
    // FORMAT.Month `Month`
    [{ ms: 1640995200000, format: consts_1.FORMAT.Month }, `January`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.Month, sub: consts_1.SUB.EN }, `January`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.Month, sub: consts_1.SUB.RU }, `Январь`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.Month, sub: consts_1.SUB.RU_DECL }, `Января`],
    // FORMAT.MonthYYYY `Month YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthYYYY }, `January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthYYYY, sub: consts_1.SUB.EN }, `January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthYYYY, sub: consts_1.SUB.RU }, `Январь 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthYYYY, sub: consts_1.SUB.RU_DECL }, `Января 2022`],
    // FORMAT.MonthDDсYYYY `Month DD, YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthDDсYYYY }, `January 01 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthDDсYYYY, sub: consts_1.SUB.EN }, `January 01 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthDDсYYYY, sub: consts_1.SUB.RU }, `Январь 01 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.MonthDDсYYYY, sub: consts_1.SUB.RU_DECL }, `Января 01 2022`],
    // FORMAT.DDMonthYYYY `DD Month YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMonthYYYY }, `01 January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMonthYYYY, sub: consts_1.SUB.EN }, `01 January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMonthYYYY, sub: consts_1.SUB.RU }, `01 Январь 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMonthYYYY, sub: consts_1.SUB.RU_DECL }, `01 Января 2022`],
    // FORMAT.DMonthYYYY `D Month YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.DMonthYYYY }, `1 January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DMonthYYYY, sub: consts_1.SUB.EN }, `1 January 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DMonthYYYY, sub: consts_1.SUB.RU }, `1 Январь 2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DMonthYYYY, sub: consts_1.SUB.RU_DECL }, `1 Января 2022`],
    // FORMAT.DMonthYYYYHHMM `D Month YYYY HH:MM`
    // [{ ms: 1640995200000, format: FORMAT.DMonthYYYYHHMM }, `1 January 2022 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DMonthYYYYHHMM, sub: SUB.EN }, `1 January 2022 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU }, `1 Январь 2022 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU_DECL }, `1 Января 2022 08:00`],
    // [{ ms: `Sat Jan 01 2022 19:29:31 GMT+0800 (Иркутск, стандартное время)`, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU_DECL }, `1 Января 2022 19:29`],
    // [{ ms: 1641036571000, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU_DECL }, `1 Января 2022 19:29`],
    // [{ ms: `Sun Jan 02 2022 09:10:13 GMT+0800 (Иркутск, стандартное время)`, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU_DECL }, `2 Января 2022 09:10`],
    // [{ ms: 1641085896541, format: FORMAT.DMonthYYYYHHMM, sub: SUB.RU_DECL }, `2 Января 2022 09:11`],
    // FORMAT.YYYYMMDDt `YYYY-MM-DD`
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-01`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-01`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-01`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-01`],
    [{ ms: 1641036571000, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-01`],
    [{ ms: 1641085896541, format: consts_1.FORMAT.YYYYMMDDt }, `2022-01-02`],
    // FORMAT.YYYYMMDD `YYYYMMDD`
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDD }, `20220101`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDD }, `20220101`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDD }, `20220101`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.YYYYMMDD }, `20220101`],
    [{ ms: 1641036571000, format: consts_1.FORMAT.YYYYMMDD }, `20220101`],
    [{ ms: 1641085896541, format: consts_1.FORMAT.YYYYMMDD }, `20220102`],
    // FORMAT.DDMMYYYYt `DD-MM-YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYt }, `01-01-2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYt }, `01-01-2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYt }, `01-01-2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYt }, `01-01-2022`],
    [{ ms: 1641036571000, format: consts_1.FORMAT.DDMMYYYYt }, `01-01-2022`],
    [{ ms: 1641085896541, format: consts_1.FORMAT.DDMMYYYYt }, `02-01-2022`],
    // FORMAT.DDMMYYYYd `DD.MM.YYYY`
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYd }, `01.01.2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYd }, `01.01.2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYd }, `01.01.2022`],
    [{ ms: 1640995200000, format: consts_1.FORMAT.DDMMYYYYd }, `01.01.2022`],
    [{ ms: 1641036571000, format: consts_1.FORMAT.DDMMYYYYd }, `01.01.2022`],
    [{ ms: 1641085896541, format: consts_1.FORMAT.DDMMYYYYd }, `02.01.2022`],
    // FORMAT.DDMMYYdHHMM `DD.MM.YY HH:MM`
    // [{ ms: 1640995200000, format: FORMAT.DDMMYYdHHMM }, `01.01.22 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DDMMYYdHHMM }, `01.01.22 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DDMMYYdHHMM }, `01.01.22 08:00`],
    // [{ ms: 1640995200000, format: FORMAT.DDMMYYdHHMM }, `01.01.22 08:00`],
    // [{ ms: 1641036571000, format: FORMAT.DDMMYYdHHMM }, `01.01.22 19:29`],
    // [{ ms: 1641085896541, format: FORMAT.DDMMYYdHHMM }, `02.01.22 09:11`],
    // FORMAT.HHMM `HH:MM`
    // [{ ms: 1640995200000, format: FORMAT.HHMM }, `08:00`],
    // [{ ms: 1640995200000, format: FORMAT.HHMM }, `08:00`],
    // [{ ms: 1640995200000, format: FORMAT.HHMM }, `08:00`],
    // [{ ms: 1640995200000, format: FORMAT.HHMM }, `08:00`],
    // [{ ms: 1641036571000, format: FORMAT.HHMM }, `19:29`],
    // [{ ms: 1641085896541, format: FORMAT.HHMM }, `09:11`],
];
exports.default = arr;
