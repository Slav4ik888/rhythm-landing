"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mocks_1 = __importDefault(require("./mocks"));
describe(`updateArrByArrByField`, () => {
    mocks_1.default.forEach(m => {
        it(`Case`, () => {
            expect((0, _1.updateArrByArrByField)(m.lastArr, `id`, m.newArr))
                .toEqual(m.result);
        });
    });
});
// npm run test:unit update-arr-by-arr-by-field.test.ts
