"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = isUndefined;
exports.isNotUndefined = isNotUndefined;
function isUndefined(obj) { return typeof obj === 'undefined'; }
;
function isNotUndefined(obj) { return !isUndefined(obj); }
;
