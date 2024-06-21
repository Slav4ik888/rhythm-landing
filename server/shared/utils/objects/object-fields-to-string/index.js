"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectFieldsToString = void 0;
const validators_1 = require("../../../../libs/validators");
const s = (str, key) => (str ? ', ' : '') + `${key}: `;
/**
 * Возвращает названия всех полей и их значений в виде строки
 * v.22.30.09
 */
const objectFieldsToString = (obj) => {
    if (!obj)
        return '';
    if ((0, validators_1.isStr)(obj))
        return obj;
    if ((0, validators_1.isNotObj)(obj))
        return JSON.stringify(obj);
    if (!Object.keys(obj).length)
        return obj;
    let str = '';
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // @ts-ignore
            if ((0, validators_1.isObj)(obj[key]))
                str += s(str, key) + `{ ${(0, exports.objectFieldsToString)(obj[key])} }`;
            // @ts-ignore
            else if ((0, validators_1.isArr)(obj[key]))
                str += s(str, key) + `${(0, exports.objectFieldsToString)(obj[key])}`;
            // @ts-ignore
            else
                str += s(str, key) + `${obj[key]}`;
        }
    }
    return str;
};
exports.objectFieldsToString = objectFieldsToString;
