"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumber = void 0;
const base_1 = require("../../base");
const errors_texts_1 = require("../../errors-texts");
/**
 * v.2023-09-22
 * Valid if ! required && ! data
 */
const validateNumber = (data, field, options = {}) => {
    const { required, min, max } = options, value = data === null || data === void 0 ? void 0 : data[field];
    // If value is undefined
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isFieldValueUndefined)(data, field))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NOT_BE_UNDEFINED });
    // Check typeof
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isNotNum)(value))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.INVALID_DATA });
    // If required
    if (required) {
        if (!data || (0, base_1.isNotHasField)(data, field))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.REQUIRED });
    }
    else {
        if (!data || (0, base_1.isNotHasField)(data, field))
            return (0, base_1.getValidResult)();
    }
    // Check min max
    if ((0, base_1.isNotUndefined)(min) && value < min)
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NUM_LESS_THAN });
    if ((0, base_1.isNotUndefined)(max) && value > max)
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NUM_MORE_THAN });
    return (0, base_1.getValidResult)();
};
exports.validateNumber = validateNumber;
