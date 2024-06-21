"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = void 0;
exports.extend = extend;
exports.cloneObj = cloneObj;
exports.objectLength = objectLength;
exports.empty = empty;
exports.noEmpty = noEmpty;
exports.isEmptyFields = isEmptyFields;
exports.isNotEmptyFields = isNotEmptyFields;
exports.arrFromObj = arrFromObj;
exports.arrFromObjByObj = arrFromObjByObj;
const validators_1 = require("../../../libs/validators");
function extend(a, b) {
    return Object.assign({}, a, b);
}
/** do nothing for test */
const noop = () => { };
exports.noop = noop;
/** Возвращает клон объекта */
function cloneObj(obj) {
    if (!obj)
        return {};
    const newObj = JSON.stringify(obj);
    return JSON.parse(newObj);
}
;
/** Возвращает длину объекта (кол-во элементов) */
function objectLength(obj) {
    if ((0, validators_1.isNotObj)(obj))
        return 0;
    let result = 0;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
            result++;
    }
    return result;
}
;
/** True если пустой объект */
function empty(obj) {
    return !objectLength(obj);
}
/** True если не пустой объект */
function noEmpty(obj) {
    return !empty(obj);
}
/**
 * True if all "obj" fields is empty value
 * @param {object} obj -
 */
function isEmptyFields(obj // simple obj
) {
    if ((0, validators_1.isNotObj)(obj))
        return true;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (obj[key])
                return false;
        }
    }
    return true;
}
;
/**
 * v.2023-10-15
 * False if one of any fields in "obj" with value
 * @param {object} obj - simple obj
 */
function isNotEmptyFields(obj) {
    return !isEmptyFields(obj);
}
function arrFromObj(obj) {
    let arr = [];
    if ((0, validators_1.isNotObj)(obj))
        return arr;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // @ts-ignore
            arr.push(obj[key]);
        }
    }
    return arr;
}
;
/**
 * Возвращает массив объектов с полем [field] из obj
 * [{status: `Выполняется`}, {status: `На проверке`} ...]
 */
function arrFromObjByObj(obj, // role || typeListSelect || TaskStatusConst
field // `status`, `currentStatus`
) {
    let arr = [];
    if ((0, validators_1.isNotObj)(obj))
        return arr;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // @ts-ignore
            arr.push({ [field]: obj[key] });
        }
    }
    return arr;
}
;
