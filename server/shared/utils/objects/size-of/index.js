"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeOf = sizeOf;
const calcBytes = (d) => d.length * 2;
function sizeOf(data) {
    let bytes = 0;
    if (!data || data === null || data === undefined)
        return bytes;
    switch (typeof data) {
        case 'number':
            bytes += 8;
            break;
        case 'string':
            bytes += calcBytes(data);
            break;
        case 'boolean':
            bytes += 4;
            break;
        case 'object':
            for (let key in data) {
                bytes += sizeOf(key);
                bytes += sizeOf(data[key]);
            }
            break;
    }
    return bytes;
}
;
