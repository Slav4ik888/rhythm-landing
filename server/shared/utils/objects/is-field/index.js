"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isField = isField;
const validators_1 = require("../../../../libs/validators");
function isField(obj, field) {
    if (!obj || (0, validators_1.isNotObj)(obj) || !field || (0, validators_1.isNotStr)(field))
        return false;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (key === field)
                return true;
        }
    }
    return false;
}
