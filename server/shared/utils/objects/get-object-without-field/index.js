"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjectWithoutField = getObjectWithoutField;
const objects_1 = require("../objects");
function getObjectWithoutField(obj, field1, field2) {
    if (!obj)
        return {};
    if (!field1 || typeof field1 !== 'string')
        return obj;
    if (typeof field2 !== 'undefined' && typeof field2 !== 'string')
        return obj;
    const newObj = (0, objects_1.cloneObj)(obj);
    for (const key in newObj) {
        if (Object.prototype.hasOwnProperty.call(newObj, key)) {
            if (key === field1) {
                if (field2) {
                    for (const key2 in newObj[key]) {
                        if (Object.prototype.hasOwnProperty.call(newObj[key], key2)) {
                            // @ts-ignore
                            if (key2 === field2)
                                delete newObj[field1][field2];
                        }
                    }
                    // @ts-ignore
                }
                else
                    delete newObj[field1];
            }
        }
    }
    return newObj;
}
