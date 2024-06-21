"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNumberId = createNumberId;
/**
 * Возвращает максимально имещющееся значение
 * @param {Array} arr
 * @param {string} field поле по которому проверка, значение должно быть number
 */
function getMaxValue(arr, field = 'id') {
    let maxValue = 0;
    arr.forEach(item => {
        // @ts-ignore
        if (item[field] > maxValue)
            maxValue = item[field];
    });
    return maxValue;
}
;
/**
 * Создаёт id следующий после максимального, если это первый элемент то 1
 */
function createNumberId(arr, // массив для которого создаём
field = 'id' // поле хранящее значение <number>
) {
    if (!arr)
        return undefined;
    const maxId = getMaxValue(arr, field);
    return maxId + 1;
}
