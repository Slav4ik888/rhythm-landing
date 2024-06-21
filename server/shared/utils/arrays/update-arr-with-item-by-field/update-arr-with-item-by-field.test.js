"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const mocks_1 = require("./mocks");
describe('ARRAY.JS - updateArrWithItemByField', () => {
    it('Обновляем по полю id', () => {
        expect((0, _1.updateArrWithItemByField)([...mocks_1.mockArray], 'id', mocks_1.mockFieldUpdate)).toEqual(mocks_1.mockArrayUpdated);
    });
    it('Обновляемый объект undefined', () => {
        // @ts-ignore
        expect((0, _1.updateArrWithItemByField)([...mocks_1.mockArray], 'id', undefined)).toEqual(mocks_1.mockArray);
    });
    it('Обновляем несуществующим объектом, он добавляется к массиву', () => {
        expect((0, _1.updateArrWithItemByField)([...mocks_1.mockArray], 'id', { id: '555' })).toEqual([...mocks_1.mockArray, { id: '555' }]);
    });
    it('При отсутствии items создаёт пустой массив и добавляет к нему value', () => {
        // @ts-ignore
        expect((0, _1.updateArrWithItemByField)(undefined, 'id', { id: '555' })).toEqual([{ id: '555' }]);
    });
    it('Если стоит flags ["update"], то в обновляемом объекте, обновляются только те поля что переданы, остальные имеющиеся остаются без изменений', () => {
        expect((0, _1.updateArrWithItemByField)([...mocks_1.mockArray], 'id', mocks_1.mockFieldUpdateWithoutAnyFields, 'update')).toEqual(mocks_1.mockArrayUpdateWithoutAnyFields);
    });
});
// npm run test:unit update-arr-with-item-by-field.test.ts
