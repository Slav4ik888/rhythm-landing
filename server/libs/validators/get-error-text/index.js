"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorText = exports.ERROR_NAME = void 0;
const strings_1 = require("../../../shared/utils/strings");
const error_text_1 = require("./error-text");
Object.defineProperty(exports, "ERROR_NAME", { enumerable: true, get: function () { return error_text_1.ERROR_NAME; } });
/** v.23-07-31 */
const getErrorText = (errorName, fieldName, // Field name
value // Field value
) => {
    switch (errorName) {
        case error_text_1.ERROR_NAME.MUST_BE_ONE_OF_SEVERAL: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не является одним из допустимых значений.`;
        case error_text_1.ERROR_NAME.ADDITIONAL_PROPERTIES: return `Присутствует недопустимое поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')}.`;
        case error_text_1.ERROR_NAME.REQUIRED: return `Отсутствует обязательное поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')}.`;
        case error_text_1.ERROR_NAME.CONSTANT: return `Значение в поле ${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')}, не соответствует ожидаемому значению${(0, strings_1.showIfNotUndefined)(value, ': "###"')}.`;
        case error_text_1.ERROR_NAME.MUST_NOT_BE_EMPTY: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должно быть пустым.`;
        case error_text_1.ERROR_NAME.MAX_ITEMS: return `Массив${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должен быть больше${(0, strings_1.showIfNotUndefined)(value, ' ###')} элементов.`;
        case error_text_1.ERROR_NAME.STR_LESS_THAN: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должно быть меньше${(0, strings_1.showIfNotUndefined)(value, ' ###')} символов.`;
        case error_text_1.ERROR_NAME.STR_MORE_THAN: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должно быть больше${(0, strings_1.showIfNotUndefined)(value, ' ###')} символов.`;
        case error_text_1.ERROR_NAME.NUM_LESS_THAN: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должно быть меньше${(0, strings_1.showIfNotUndefined)(value, ' ###')}.`;
        case error_text_1.ERROR_NAME.NUM_MORE_THAN: return `Поле${(0, strings_1.showIfNotUndefined)(fieldName, ' "###"')} не должно быть больше${(0, strings_1.showIfNotUndefined)(value, ' ###')}.`;
        case error_text_1.ERROR_NAME.INVALID_DATA: return `Не корректные данные${(0, strings_1.showIfNotUndefined)(fieldName, ', для поля "###"')}.`;
        case error_text_1.ERROR_NAME.INVALID_FORMAT: return `Не верный формат данных${(0, strings_1.showIfNotUndefined)(fieldName, ', для поля "###"')}.`;
        case error_text_1.ERROR_NAME.INVALID_ONE_OF: return `Не соответствует допустимым значениям${(0, strings_1.showIfNotUndefined)(fieldName, ', для поля "###"')}.`;
        case error_text_1.ERROR_NAME.PASSWORD_NOT_EQUAL_CONF: return 'Значение в поле "Повторите пароль", не совпадает с введёным паролем';
        case error_text_1.ERROR_NAME.PERMISSONS_NOT_ALLOWED: return 'Нет разрешения на данную операцию';
        case error_text_1.ERROR_NAME.PERMISSONS_UNKNOWN: return 'Не допустимый тип разрешения';
        case error_text_1.ERROR_NAME.PERMISSONS_DISABLED: return 'Для регистрации, необходимо предоставить согласие на обработку персональных данных';
        case error_text_1.ERROR_NAME.ITN: return 'ИНН должен состоять из 10 или 12 цифр.';
        default: return `Не предусмотренная ошибка${(0, strings_1.showIfNotUndefined)(errorName, ' "###"')}.`;
    }
};
exports.getErrorText = getErrorText;
