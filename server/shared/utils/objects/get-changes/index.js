"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChanges = getChanges;
const arrays_1 = require("../../arrays");
const validators_1 = require("../../../../libs/validators");
const set_value_by_scheme_1 = require("../set-value-by-scheme");
/**
 * Check updObj of new field, that absent in prevObj
 * Add new field to newObj
 */
const checkAndAddNewField = (newObj, prevObj, updObj, prevScheme = '') => {
    if ((0, validators_1.isNotObj)(updObj))
        return;
    for (const key in updObj) {
        const scheme = prevScheme ? `${prevScheme}.${key}` : key;
        if (Object.prototype.hasOwnProperty.call(updObj, key)) {
            // @ts-ignore
            const updValue = updObj[key];
            // @ts-ignore
            if ((0, validators_1.isUndefined)(prevObj[key])) { // New field
                (0, set_value_by_scheme_1.setValueByScheme)(newObj, scheme, updValue);
                continue;
            }
            // @ts-ignore
            checkAndAddNewField(newObj, prevObj[key], updValue, scheme);
        }
    }
};
/** Check is Array or any type and save */
const checkIfNotObj = (newObj, prevValue, updValue, scheme) => {
    if ((0, validators_1.isArr)(prevValue)) {
        if (!(0, arrays_1.isArrsEqual)(prevValue, updValue))
            (0, set_value_by_scheme_1.setValueByScheme)(newObj, scheme, updValue);
    }
    else if (prevValue !== updValue)
        (0, set_value_by_scheme_1.setValueByScheme)(newObj, scheme, updValue);
};
const checkChanges = (newObj, prevObj, updObj, prevScheme = '') => {
    for (const key in prevObj) {
        const scheme = prevScheme ? `${prevScheme}.${key}` : key;
        if (Object.prototype.hasOwnProperty.call(prevObj, key)) {
            const 
            // @ts-ignore
            value = prevObj[key], 
            // @ts-ignore
            updValue = updObj[key];
            if ((0, validators_1.isUndefined)(updValue))
                continue; // В этом элементе не было изменений
            if ((0, validators_1.isObj)(value)) {
                checkChanges(newObj, value, updValue, scheme);
            }
            else {
                checkIfNotObj(newObj, value, updValue, scheme);
            }
        }
    }
};
/**
 * v.2023-05-16
 * Возвращает объект с теми полями, которые были изменены по отношению к первоначальному объекту
 * ! Возможная глубина вложения 8 (ограничено ф-ей setValueByScheme)
 * ! Нельзя использовать при удалении полей - если в новом объекте нет какого-то поля, то это поле в старом объекте не удалиться
 * @param prevObj - первоначальный объект
 * @param updObj  - новый объект
 */
function getChanges(prevObj, updObj) {
    if ((!prevObj && !updObj) || !updObj)
        return {};
    if (!prevObj)
        return updObj;
    const newObj = {};
    // CHECK prevObj
    checkChanges(newObj, prevObj, updObj);
    // CHECK new field in updObj 
    checkAndAddNewField(newObj, prevObj, updObj);
    return newObj;
}
