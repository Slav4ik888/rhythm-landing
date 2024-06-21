"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemById = getItemById;
const get_item_from_arr_by_field_1 = require("../get-item-from-arr-by-field");
/** v.2023-09-17 */
function getItemById(arr, id) {
    return (0, get_item_from_arr_by_field_1.getItemFromArrByField)(arr, 'id', id);
}
