"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekDay = getWeekDay;
const consts_1 = require("./utils/consts");
/**
 * Возвращает день недель в нужном формате
 */
function getWeekDay(timestamp, // таймстамп
format // формат, в котором нужно вернуть timestamp
) {
    const newDate = new Date(timestamp);
    const formatType = {
        smallEng: 'smallEng',
        smallRus: 'smallRus',
        largeRus: 'largeRus',
    };
    switch (format) {
        case formatType.smallEng:
            return consts_1.WEEK_DAYS[newDate.getDay()];
        case formatType.smallRus:
            return consts_1.WEEK_DAYS_RU[newDate.getDay()];
        case formatType.largeRus:
            return consts_1.WEEK_DAYS_FULL[newDate.getDay()];
        default: return timestamp.toString();
    }
}
