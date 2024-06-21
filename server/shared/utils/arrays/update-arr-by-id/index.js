"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArrById = updateArrById;
const update_arr_with_item_by_field_1 = require("../update-arr-with-item-by-field");
/**
 * Возвращает массив с обновлённым item by id
 *
 * Если нет массива items, то создаёт его
 *
 * @param {Item[]} items
 * @param {object} updateItem
 * @param {string | array} flags - если стоит `update`, то в обновляемом объекте, обновляются только
 * те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
 */
function updateArrById(items, updateItem, flags) {
    return (0, update_arr_with_item_by_field_1.updateArrWithItemByField)(items, 'id', updateItem, flags);
}
