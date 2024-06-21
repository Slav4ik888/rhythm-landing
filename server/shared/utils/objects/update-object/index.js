"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObject = updateObject;
const arrays_1 = require("../../arrays");
const validators_1 = require("../../../../libs/validators");
const objects_1 = require("../objects");
const set_value_by_scheme_1 = require("../set-value-by-scheme");
/**
 * Check updObj of new field, that absent in prevObj
 * Add new field to newObj
 */
const addNewField = (newObj, prevObj, updObj, prevScheme = '') => {
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
            addNewField(newObj, prevObj[key], updValue, scheme);
        }
    }
};
/** Check is Array or any type and save */
const addChanges = (newObj, prevValue, updValue, scheme) => {
    if ((0, validators_1.isArr)(prevValue)) {
        if (!(0, arrays_1.isArrsEqual)(prevValue, updValue)) {
            (0, set_value_by_scheme_1.setValueByScheme)(newObj, scheme, updValue);
        }
    }
    else if (prevValue !== updValue) {
        (0, set_value_by_scheme_1.setValueByScheme)(newObj, scheme, updValue);
    }
};
/** Add changes */
const checkAndAddChanges = (newObj, prevObj, updObj, prevScheme = '') => {
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
                checkAndAddChanges(newObj, value, updValue, scheme);
            }
            else {
                addChanges(newObj, value, updValue, scheme);
            }
        }
    }
};
/**
 * v.2023-05-19
 * Возвращает новый объект prevObj с обновлёнными полями из updFields
 * Обновляет атомарно
 * Not deleted fields
 */
function updateObject(prevObj, updFields) {
    if (!prevObj && !updFields)
        return {};
    if (prevObj && !updFields)
        return prevObj;
    if (!prevObj && updFields)
        return updFields;
    const newObj = (0, objects_1.cloneObj)(prevObj);
    // CHECK prevObj
    checkAndAddChanges(newObj, prevObj, updFields);
    // CHECK new field in updFields 
    addNewField(newObj, prevObj, updFields);
    return newObj;
}
;
