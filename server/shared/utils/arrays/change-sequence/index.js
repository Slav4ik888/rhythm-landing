"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeSequence = void 0;
/**
 * v.2024-03-02
 * id ставит после after
 * При отсутствии after - id добавляется в конец
 */
const changeSequence = (arr, id, after) => {
    if (!arr || !arr.length)
        return [id];
    const newArr = [];
    let pushed = false;
    arr.forEach(arrId => {
        if (arrId !== id) {
            newArr.push(arrId);
        }
        if (arrId === after) {
            newArr.push(id);
            pushed = true;
        }
    });
    if (!pushed)
        newArr.push(id);
    return newArr;
};
exports.changeSequence = changeSequence;
