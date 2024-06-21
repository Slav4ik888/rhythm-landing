"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArrWithItemByField = updateArrWithItemByField;
const objects_1 = require("../../objects");
/**
 * v.2023-09-17
 * Возвращает массив с обновлённым item
 * Если нет массива items, то создаёт его
 *
 * @param {Item} items
 * @param {string} field -
 * @param {object} updateItem
 * @param {string | array} flags -
 * @return {array} items
 */
function updateArrWithItemByField(items, field, // поле по которому ищется объект: `id` || `email` || any
updateItem, flags // если стоит `update`, то в обновляемом объекте, обновляются только 
// те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
) {
    if (!updateItem)
        return items;
    let newItems = [];
    // Если нет массива items, то создаём его
    if (!items) {
        newItems.push(updateItem);
        return newItems;
    }
    const idx = items.findIndex((item) => item[field] === updateItem[field]);
    newItems = [...items];
    // Если есть - обновляем
    if (idx !== -1) {
        let newUpdateItem = (0, objects_1.cloneObj)(updateItem);
        // Если указан флаг, обрабатываем
        if (flags === null || flags === void 0 ? void 0 : flags.includes('update')) {
            newUpdateItem = (0, objects_1.updateObject)(items[idx], updateItem);
        }
        newItems = [...newItems.slice(0, idx), newUpdateItem, ...newItems.slice(idx + 1)];
    }
    else { // Нету - добавляем
        newItems.push(updateItem);
    }
    return newItems;
}
;
