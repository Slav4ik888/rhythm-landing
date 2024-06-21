"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFieldValueBool = void 0;
const has_field_1 = require("../has-field");
const is_bool_1 = require("../is-bool");
/**
 * v.2023-05-08
 * True if field is present, but value is boolean
 */
const isFieldValueBool = (data, field) => 
// @ts-ignore
(0, has_field_1.isHasField)(data, field) && (0, is_bool_1.isBool)(data[field]);
exports.isFieldValueBool = isFieldValueBool;
