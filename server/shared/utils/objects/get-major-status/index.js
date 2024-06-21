"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValuePosition = void 0;
exports.getMajorStatus = getMajorStatus;
/**
 * Возвращает номер позиции элемента в объекте
 */
const getValuePosition = (obj, value) => {
    let possition = 0;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            ++possition;
            if (value === obj[key])
                return possition;
        }
    }
    return 0;
};
exports.getValuePosition = getValuePosition;
/**
 * v.2023-07-15
 * Проверяем есть ли уже более значимый статус
 * Возвращает статус стоящий дальше по списку (имеющий больший индекс)
 */
function getMajorStatus(obj, currentStatus, newStatus) {
    const curPos = (0, exports.getValuePosition)(obj, currentStatus);
    const newPos = (0, exports.getValuePosition)(obj, newStatus);
    return newPos > curPos ? newStatus : currentStatus;
}
;
