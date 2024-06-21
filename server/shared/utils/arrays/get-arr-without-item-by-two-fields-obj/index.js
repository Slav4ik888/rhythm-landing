"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrWithoutItemByTwoFields = getArrWithoutItemByTwoFields;
/**
 * Возвращает массив без указанного элемента по itemField
 */
function getArrWithoutItemByTwoFields(items, fieldOne, // `taskId`
fieldTwo, // `userId`
delItem) {
    const idx = items.findIndex((item) => item[fieldOne] === delItem[fieldOne]
        && item[fieldTwo] === delItem[fieldTwo]);
    let newItems = [...items];
    if (idx !== -1) {
        newItems = [...newItems.slice(0, idx), ...newItems.slice(idx + 1)];
    }
    return newItems;
}
;
