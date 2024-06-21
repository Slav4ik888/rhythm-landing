"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidResult = void 0;
/** v.23-07-22 */
const getValidResult = (errors = {}) => ({
    errors,
    valid: Object.keys(errors).length === 0
});
exports.getValidResult = getValidResult;
