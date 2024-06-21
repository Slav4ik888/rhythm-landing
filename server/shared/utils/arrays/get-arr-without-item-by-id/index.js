"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrWithoutItemById = getArrWithoutItemById;
const validators_1 = require("../../../../libs/validators");
const get_arr_without_item_1 = require("../get-arr-without-item");
function getArrWithoutItemById(items, value) {
    if ((0, validators_1.isNotStr)(value) && (0, validators_1.isNotNum)(value))
        return items;
    return (0, get_arr_without_item_1.getArrWithoutItem)(items, { id: value });
}
;
