"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFieldValueUndefined = void 0;
const has_field_1 = require("../has-field");
const is_undefined_1 = require("../is-undefined");
/**
 * v.2023-05-08
 * True if field is present, but value is undefined
 */
const isFieldValueUndefined = (data, field) => 
// @ts-ignore
(0, has_field_1.isHasField)(data, field) && (0, is_undefined_1.isUndefined)(data[field]);
exports.isFieldValueUndefined = isFieldValueUndefined;
