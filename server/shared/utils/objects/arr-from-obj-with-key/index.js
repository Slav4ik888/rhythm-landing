"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrFromObjWithKey = arrFromObjWithKey;
function arrFromObjWithKey(obj) {
    const arr = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const newObj = Object.assign({ key: [key] }, obj[key]);
            arr.push(newObj);
        }
    }
    // @ts-ignore
    return arr;
}
;
