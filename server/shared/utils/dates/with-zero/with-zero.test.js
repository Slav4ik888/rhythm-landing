"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mocks = [
    [undefined, '00'],
    [null, '00'],
    [0, '00'],
    ['-', '0-'],
    ['2022-01-01', '01'],
    ['1', '01'],
];
describe('withZero', () => {
    mocks.forEach(m => it(`${m[0]}`, () => expect((0, _1.withZero)(m[0]))
        .toEqual(m[1])));
});
// npm run test:unit with-zero.test.ts
