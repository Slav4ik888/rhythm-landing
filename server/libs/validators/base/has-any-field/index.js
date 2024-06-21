"use strict";
// v.01-04-2023
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAnyField = hasAnyField;
/**
 * Return true if obj has a field other than the schema
 */
function hasAnyField(obj, schema) {
    let result = false;
    if (!obj || !schema)
        return result;
    const schemaFields = Object.keys(schema), objFields = Object.keys(obj);
    objFields.forEach(field => {
        if (!schemaFields.includes(field))
            result = true;
    });
    return result;
}
