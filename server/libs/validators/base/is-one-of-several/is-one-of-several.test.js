"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const MOCKS = [
    {
        case: ['Word', ['Number', 'Word', 'Strings']],
        result: true
    }, {
        case: ['Word', ['Number', 'World', 'Strings']],
        result: false
    }, {
        case: [{ word: 'String' }, [{ word: 'String' }, 'Word', 'Strings']],
        result: false
    }, {
        case: [{ word: 'String' }, ['String', 'Word', 'Strings']],
        result: false
    },
];
describe('isOneOfSeveral', () => {
    MOCKS.forEach(m => {
        it('Case', () => {
            expect((0, _1.isOneOfSeveral)(m.case[1], m.case[0])).toEqual(m.result);
        });
    });
});
// npm run test:unit is-one-of-several.test.ts
