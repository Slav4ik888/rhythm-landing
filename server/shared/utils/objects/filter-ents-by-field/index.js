"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterEntsByField = filterEntsByField;
/**
 * Default
 */
// @ts-ignore
const validate = (entities, field, value, id) => { var _a; return ((_a = entities[id]) === null || _a === void 0 ? void 0 : _a[field]) === value; };
/**
 * If entities[id][field] is array
 */
// @ts-ignore
const includesValidate = (entities, field, value, id) => { var _a, _b; return (_b = (_a = entities[id]) === null || _a === void 0 ? void 0 : _a[field]) === null || _b === void 0 ? void 0 : _b.includes(value); };
/**
 * Check by one of in Value
 */
// @ts-ignore
const valueIsArray = (entities, field, value, id) => { var _a; return value.includes((_a = entities[id]) === null || _a === void 0 ? void 0 : _a[field]); };
/**
 * For recived validFunc
 */
// @ts-ignore
const validatorFunc = (entities, field, _, id, validFunc) => { var _a; return validFunc((_a = entities[id]) === null || _a === void 0 ? void 0 : _a[field]); };
// @ts-ignore
const getValidator = (value, includes, validFunc) => validFunc
    ? validatorFunc
    : Array.isArray(value)
        ? valueIsArray
        : includes
            ? includesValidate
            : validate;
/**
 * Filter entities by field and value - entities[id][field] === value
 * @param ents
 * @param field     - field for filter
 * @param value     - checked value
 * @param includes  - if entities[id][field] is array
 * @param validFunc
 */
function filterEntsByField(entities, field, value, includes, validFunc) {
    let ents = {};
    if (!field || typeof value === `undefined`)
        return ents;
    const validator = getValidator(value, includes, validFunc);
    for (let id in entities) {
        if (Object.prototype.hasOwnProperty.call(entities, id)) {
            // @ts-ignore
            if (validator(entities, field, value, id, validFunc))
                ents[id] = entities[id];
        }
    }
    return ents;
}
;
