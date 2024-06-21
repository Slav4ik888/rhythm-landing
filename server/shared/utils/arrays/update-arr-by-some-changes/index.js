"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArrBySomeChanges = updateArrBySomeChanges;
function updateArrBySomeChanges(arr, field, changesArr, obj) {
    if (!(arr === null || arr === void 0 ? void 0 : arr.length))
        return [];
    let newArr = [];
    arr.forEach(lastItem => {
        const res = changesArr.find(ch => ch === lastItem[field]);
        if (res)
            newArr.push(Object.assign(Object.assign({}, lastItem), obj));
        else
            newArr.push(lastItem);
    });
    return newArr;
}
