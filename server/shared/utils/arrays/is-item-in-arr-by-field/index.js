"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isItemInArrByField = isItemInArrByField;
const get_item_from_arr_by_field_1 = require("../get-item-from-arr-by-field");
/** Возвращает есть ли элемент itemField со значением value */
function isItemInArrByField(items, itemField, value) {
    const result = (0, get_item_from_arr_by_field_1.getItemFromArrByField)(items, itemField, value);
    return Boolean(result);
}
;
