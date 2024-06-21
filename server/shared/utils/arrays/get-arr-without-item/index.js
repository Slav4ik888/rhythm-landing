"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrWithoutItem = getArrWithoutItem;
const validators_1 = require("../../../../libs/validators");
const objects_1 = require("../../objects");
/**
 * Возвращает массив без указанного элемента
 *  => if field === undefined & value length === 1, use field = field of value, else return items
 */
function getArrWithoutItem(items, value, field) {
    if (!(items === null || items === void 0 ? void 0 : items.length))
        return [];
    if (!value)
        return items;
    if ((0, validators_1.isObj)(items[0])) {
        if ((0, validators_1.isObj)(value)) {
            if (field)
                return items.filter(item => item[field] !== value[field]);
            else {
                if ((0, objects_1.objectLength)(value) === 1) {
                    const fieldValue = (0, objects_1.getFirstFieldKey)(value);
                    if (fieldValue)
                        return items.filter(item => item[fieldValue] !== value[fieldValue]);
                }
            }
        }
        else
            return items.filter(item => item[field] !== value);
    }
    else {
        if (typeof value !== 'object')
            return items.filter(item => item !== value);
    }
    return items;
}
;
