"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withZero = withZero;
/**
 * Добавляет возвращает число состоящее из 2х цифр (последние 2 символа)
 * если число состоит из 1 цифры то добавляет 0 впереди
 *  1 => 01, 12 => 12, 12345 => 45
 */
function withZero(n) {
    if (!n)
        return `00`;
    return (`0` + n).slice(-2);
}
