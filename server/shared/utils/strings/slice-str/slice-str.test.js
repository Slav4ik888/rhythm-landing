"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mocks_1 = require("./mocks");
describe('STRINGS - sliceStr', () => {
    mocks_1.mSliceStr.forEach((m) => {
        it(`sliceStr - ${m.describe}`, () => {
            expect((0, _1.sliceStr)(m.maxLength, m.str)).toEqual(m.result);
        });
    });
});
// npm run test slice-str.test.ts
