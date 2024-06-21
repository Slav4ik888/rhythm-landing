"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const base_1 = require("../../base");
const errors_texts_1 = require("../../errors-texts");
const string_1 = require("../string");
/** Проверяем correct email, example for восстановления пароля */
const validateEmail = (data, required) => {
    const res = (0, string_1.validateString)(data, 'email', { required, max: 50 });
    if (!res.valid)
        return res;
    if (!required) {
        if (!data || (0, base_1.isNotHasField)(data, 'email') || (0, base_1.isEmptyStr)(data.email))
            return (0, base_1.getValidResult)();
    }
    if ((0, base_1.isNotEmail)(data === null || data === void 0 ? void 0 : data.email))
        return (0, base_1.getValidResult)({ email: errors_texts_1.ErrorText.EMAIL_INVALID });
    return (0, base_1.getValidResult)();
};
exports.validateEmail = validateEmail;
