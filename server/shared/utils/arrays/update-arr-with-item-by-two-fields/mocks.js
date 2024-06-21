"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockArrayAdded = exports.mockArrayUpdated = exports.mockFieldAdd = exports.mockFieldUpdate = exports.mockArray = void 0;
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
// обновляемое значение
exports.mockFieldUpdate = {
    field1: `field3`,
    field2: `field4`,
    id: `333`,
};
// добавляемое значение
exports.mockFieldAdd = {
    field1: `field7`,
    field2: `field8`,
    id: `333`,
};
exports.mockArrayUpdated = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field3`,
        field2: `field4`,
        id: `333`,
    }, {
        field1: `field5`,
        field2: `field6`,
        id: `333`,
    }];
exports.mockArrayAdded = [{
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
    }, {
        field1: `field7`,
        field2: `field8`,
        id: `333`,
    }];
