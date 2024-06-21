"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOneOfSeveral = void 0;
const base_1 = require("../../base");
const errors_texts_1 = require("../../errors-texts");
/**
 * v.2023-05-09
 */
const validateOneOfSeveral = (data, field, list, options = {}) => {
    const { required } = options, value = data === null || data === void 0 ? void 0 : data[field];
    // If value is undefined
    if ((0, base_1.isHasField)(data, field) && (0, base_1.isFieldValueUndefined)(data, field))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NOT_BE_UNDEFINED });
    // If required
    if (required) {
        if (!data || (0, base_1.isNotHasField)(data, field))
            return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.REQUIRED });
    }
    else {
        if (!data || (0, base_1.isNotHasField)(data, field) || (0, base_1.isEmptyStr)(value))
            return (0, base_1.getValidResult)();
    }
    // Checking value for a match with list
    if ((0, base_1.isNotOneOfSeveral)(Object.values(list), value))
        return (0, base_1.getValidResult)({ [field]: errors_texts_1.ErrorText.NOT_ONE_OF_SEVERAL });
    return (0, base_1.getValidResult)();
};
exports.validateOneOfSeveral = validateOneOfSeveral;
