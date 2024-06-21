"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrFromArrsByFieldAndValue = getArrFromArrsByFieldAndValue;
/**
 * Get arr from arrs into arr by field
 *  Contact: {
 *   companies: [id1, id2 ...]
 *  }
 */
function getArrFromArrsByFieldAndValue(arr, fieldArr, value) {
    if (!(arr === null || arr === void 0 ? void 0 : arr.length))
        return [];
    return arr === null || arr === void 0 ? void 0 : arr.reduce((acc, item) => {
        item[fieldArr].forEach(it => {
            // @ts-ignore
            if (it === value)
                acc.push(item);
        });
        return acc;
    }, []);
}
