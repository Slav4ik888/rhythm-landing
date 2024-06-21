"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotHasField = exports.isHasField = void 0;
/**
 * v.2023-05-08
 * True if the data has this field
 */
const isHasField = (data, field) => Boolean(data === null || data === void 0 ? void 0 : data.hasOwnProperty(field));
exports.isHasField = isHasField;
const isNotHasField = (data, field) => !(0, exports.isHasField)(data, field);
exports.isNotHasField = isNotHasField;
