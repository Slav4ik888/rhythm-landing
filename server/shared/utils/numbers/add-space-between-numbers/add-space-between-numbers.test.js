"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
;
const mocks = [
    // @ts-ignore
    [NaN, ``], [undefined, ``], [null, ``], [``, ``],
    [0, `0`], [1, `1`], [`0`, `0`], [`1`, `1`],
    [`1234sdf`, `1 234`],
    [`123456789.1234asdf`, `123 456 789.1234`],
    [`123456789,1234asdf`, `123 456 789`],
    [`sdf123456789.1234asdf`, ``],
    [123456789.1234, `123 456 789.1234`]
];
describe(`addSpaceBetweenNumbers`, () => {
    mocks.forEach((m, i) => it(`${i + 1}`, () => expect((0, _1.addSpaceBetweenNumbers)(m[0]))
        .toEqual(m[1])));
});
// npm run test add-space-between-numbers.test.ts
