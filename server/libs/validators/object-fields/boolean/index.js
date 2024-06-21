"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBoolean = void 0;
const base_1 = require("../../base");
const errors_texts_1 = require("../../errors-texts");
const validateBoolean = (data, field, options = {}) => {
    const { required } = options;
    // If value is undefined
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isFieldValueUndefined)(data, field))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NOT_BE_UNDEFINED });
    // Check typeof
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isNotBool)(data[field]))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.INVALID_DATA });
    // If required
    if (required) {
        if (!data || (0, base_1.isNotHasField)(data, field))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.REQUIRED });
    }
    if (!data)
        return (0, base_1.getValidResult)();
    if ((0, base_1.isNotHasField)(data, field))
        return (0, base_1.getValidResult)();
    if (!(0, base_1.isFieldValueBool)(data, field))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.INVALID_DATA });
    return (0, base_1.getValidResult)();
};
exports.validateBoolean = validateBoolean;
