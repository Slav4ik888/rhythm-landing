"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const mocks_1 = __importDefault(require("./mocks"));
describe(`formatDate`, () => {
    mocks_1.default.forEach((m) => it(`format = ${m[0].format} ${m[0].sub ? `, sub = ${m[0].sub}` : null}`, () => expect((0, index_1.formatDate)(m[0].ms, m[0].format, m[0].sub))
        .toEqual(m[1])));
});
// npm run test:unit format-date.test.ts
