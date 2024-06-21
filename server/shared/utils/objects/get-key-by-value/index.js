"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyByValue = getKeyByValue;
/**
 * Возвращает ключ объекта по значению value
 */
function getKeyByValue(obj, value) {
    if (typeof obj !== `object`) {
        console.log(`obj - не является объектом. ${obj}`);
        return ``;
    }
    const entries = Object.entries(obj);
    if (!entries.length) {
        console.log(`obj - пустой. ${obj}`);
        return ``;
    }
    const idx = entries.findIndex(item => item[1] === value);
    if (idx === -1) {
        console.log(`${value} отсутствует в ${obj}`);
        return ``;
    }
    return entries[idx][0];
}
