"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mocks = [
    [undefined, 0],
    [null, 0],
    [0, 0],
    [`2022-01-01`, 1640995200000],
    [`Sat Jan 01 2022 19:29:31 GMT+0800 (Иркутск, стандартное время)`, 1641036571000],
];
describe(`getMsFromDate`, () => {
    mocks.forEach(m => it(`${m[0]}`, () => expect((0, _1.getMsFromDate)(m[0]))
        .toEqual(m[1])));
});
// npm run test get-ms-from-date.test.ts
