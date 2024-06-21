"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMsFromDate = getMsFromDate;
/**
 * Возвращает дату в виде миллисекунд
 */
function getMsFromDate(date) {
    if (!date)
        return 0;
    return new Date(date).getTime();
}
