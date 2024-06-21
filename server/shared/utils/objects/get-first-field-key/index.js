"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstFieldKey = getFirstFieldKey;
/**
 * Return key of object with 1 value
 */
function getFirstFieldKey(obj) {
    if (typeof obj !== 'object')
        return '';
    const key = Object.keys(obj);
    if (!key.length || key.length > 1)
        return '';
    return key[0];
}
