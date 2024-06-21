"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChanges = isChanges;
function checkIsChanges(first, second) {
    // console.log('second: ', second);
    // console.log('first: ', first);
    let result = false; // Нет изменений
    if (!first && second)
        return true;
    for (let key in second) {
        if (Object.prototype.hasOwnProperty.call(second, key)) {
            // console.log('second[key]: ', second[key]);
            if (typeof second[key] === 'object') { // Ищем string | number | boolean
                const res = isChanges(first === null || first === void 0 ? void 0 : first[key], second === null || second === void 0 ? void 0 : second[key]);
                if (res) {
                    result = true;
                    // console.log(`result IN1: ${key}: `, first?.[key], ` - `, second?.[key]);
                }
            }
            else if ((second === null || second === void 0 ? void 0 : second[key]) !== (first === null || first === void 0 ? void 0 : first[key])) {
                // console.log('second[key]: ', second[key]);
                // console.log('first[key]: ', first?.[key]);
                // console.log(`result IN2: ${key}: `, second?.[key], ` - `, first?.[key]);
                result = true;
            }
        }
    }
    return result;
}
;
/**
 * Проверяет были ли изменения в новом объекте
 * @param prevObj - первоначальный объект
 * @param newObj  - новый объект
 */
function isChanges(prevObj, newObj) {
    // console.log('newObj: ', newObj);
    // console.log('prevObj: ', prevObj);
    const result1 = checkIsChanges(prevObj, newObj);
    // console.log('result1: ', result1);
    const result2 = checkIsChanges(newObj, prevObj);
    // console.log('result2: ', result2);
    return result1 || result2;
}
;
