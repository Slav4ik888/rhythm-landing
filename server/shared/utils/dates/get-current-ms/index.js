"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentMs = void 0;
/**
 * Get current time in milliseconds
 */
const getCurrentMs = () => new Date().getTime();
exports.getCurrentMs = getCurrentMs;
