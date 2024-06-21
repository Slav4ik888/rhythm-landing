"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const m = __importStar(require("./mocks"));
describe(`ARRAY.JS - getArrWithoutItemByTwoFields`, () => {
    it(`Обновляем по полю id`, () => {
        expect((0, _1.getArrWithoutItemByTwoFields)([...m.mockArray], `field1`, `field2`, m.mockFieldTrue))
            .toEqual(m.mockArrayWithoutItem);
    });
    it(`Обновляем несуществующим объектом, он добавляется к массиву`, () => {
        expect((0, _1.getArrWithoutItemByTwoFields)([...m.mockArray], `field1`, `field2`, m.mockFieldFalse))
            .toEqual(m.mockArray);
    });
});
// npm run test get-arr-without-item-by-two-fields.test.js
