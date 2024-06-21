"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockStrLength = void 0;
const strLength = (n, char) => [...new Array(n)]
    .map(_ => char)
    .join('');
const getMockStrLength = (n, char) => {
    let c = '_';
    if (char && typeof char === 'string')
        c = char[0];
    return strLength(n, c);
};
exports.getMockStrLength = getMockStrLength;
