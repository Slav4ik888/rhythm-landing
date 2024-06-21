"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockArrayWithoutItem = exports.mockFieldFalse = exports.mockFieldTrue = exports.mockArray = void 0;
exports.mockArray = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field3`,
        field2: `field4`,
        id: `222`,
    }, {
        field1: `field5`,
        field2: `field6`,
        id: `333`,
    }];
// имеющееся значение
exports.mockFieldTrue = {
    field1: `field3`,
    field2: `field4`,
    id: `333`,
};
// отсутствующее значение
exports.mockFieldFalse = {
    field1: `field7`,
    field2: `field8`,
    id: `333`,
};
exports.mockArrayWithoutItem = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field5`,
        field2: `field6`,
        id: `333`,
    }];
