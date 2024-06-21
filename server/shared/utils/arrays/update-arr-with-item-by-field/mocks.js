"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockArrayUpdateWithoutAnyFields = exports.mockFieldUpdateWithoutAnyFields = exports.mockArrayWithout3Item = exports.mockArrayWithout2Item = exports.mockArrayWithout1Item = exports.mockArrayUpdated = exports.mockFieldUpdate = exports.mockArray = void 0;
exports.mockArray = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `222`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `333`,
    }];
exports.mockFieldUpdate = {
    field1: `field1`,
    field2: `field2Updated`,
    id: `222`,
};
exports.mockArrayUpdated = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field1`,
        field2: `field2Updated`,
        id: `222`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `333`,
    }];
exports.mockArrayWithout1Item = [{
        field1: `field1`,
        field2: `field2`,
        id: `222`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `333`,
    }];
exports.mockArrayWithout2Item = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `333`,
    }];
exports.mockArrayWithout3Item = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `222`,
    }];
exports.mockFieldUpdateWithoutAnyFields = {
    field1: `field1`,
    field3: `newField`,
    id: `222`,
};
exports.mockArrayUpdateWithoutAnyFields = [{
        field1: `field1`,
        field2: `field2`,
        id: `111`,
    }, {
        field1: `field1`,
        field2: `field2`,
        field3: `newField`,
        id: `222`,
    }, {
        field1: `field1`,
        field2: `field2`,
        id: `333`,
    }];
