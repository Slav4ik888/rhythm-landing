"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArrByArrByField = updateArrByArrByField;
/**
 * Update lastArr by newArr by field, все не обновлённые объекты остаются без изменений
 */
function updateArrByArrByField(lastArr, field, newArr) {
    if (!(lastArr === null || lastArr === void 0 ? void 0 : lastArr.length))
        return newArr;
    let updatedArr = [...newArr];
    lastArr.forEach(item => {
        const res = updatedArr.find(updated => updated[field] === item[field]);
        if (!res)
            updatedArr.push(item);
    });
    return updatedArr;
}
;
