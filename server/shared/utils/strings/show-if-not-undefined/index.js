"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIfNotUndefined = void 0;
const validators_1 = require("../../../../libs/validators");
/** v.23-07-23 */
const showIfNotUndefined = (field, wrapper) => {
    let str = '';
    if ((0, validators_1.isUndefined)(field))
        return str;
    if (!wrapper)
        return field;
    const posField = wrapper.indexOf('###');
    if (posField === -1)
        return field;
    const wrapStart = wrapper.slice(0, posField);
    if (wrapStart)
        str += wrapStart;
    str += field;
    const wrapEnd = wrapper.slice(posField + 3);
    if (wrapEnd)
        str += wrapEnd;
    return str;
};
exports.showIfNotUndefined = showIfNotUndefined;
