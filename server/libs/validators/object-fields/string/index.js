"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateString = void 0;
const base_1 = require("../../base");
const errors_texts_1 = require("../../errors-texts");
/**
 * v.2023-05-08
 * Valid if ! required && ! data
 */
const validateString = (data, field, options = {}) => {
    const { required, length, min, max } = options, value = data === null || data === void 0 ? void 0 : data[field];
    // If value is undefined
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isFieldValueUndefined)(data, field))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NOT_BE_UNDEFINED });
    // Check typeof
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isNotStr)(value))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.INVALID_DATA });
    // If required
    if (required) {
        if (!data || (0, base_1.isNotHasField)(data, field))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.REQUIRED });
    }
    else {
        if (!data || (0, base_1.isNotHasField)(data, field) || (0, base_1.isEmptyStr)(value))
            return (0, base_1.getValidResult)();
    }
    // Check length
    if ((0, base_1.isNotUndefined)(length)) {
        if ((0, base_1.isNotRequiredLength)(value, length))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.MUST_BE_LENGTH });
    }
    else {
        if ((0, base_1.isNotUndefined)(min) && (0, base_1.isLessThan)(value, min))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.STR_LESS_THAN });
        if ((0, base_1.isNotUndefined)(max) && (0, base_1.isMoreThan)(value, max))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.STR_MORE_THAN });
    }
    return (0, base_1.getValidResult)();
};
exports.validateString = validateString;
