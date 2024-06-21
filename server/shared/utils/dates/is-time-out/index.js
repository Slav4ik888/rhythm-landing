"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTimeOut = isTimeOut;
const validators_1 = require("../../../../libs/validators");
const get_current_ms_1 = require("../get-current-ms");
/**
 * Возвращает вышло ли время ожидания
 * @param {string | number} lastTime - предыдущее время
 * @param {number} waiting  - ожидание в ms
 * v.23-04-20
 */
function isTimeOut(lastTime, // предыдущее время
waiting // ожидание в ms
) {
    if (!lastTime)
        return true;
    const lastTimeMs = ((0, validators_1.isNum)(lastTime) ? lastTime : Date.parse(lastTime)), currentTimeMs = (0, get_current_ms_1.getCurrentMs)();
    return waiting < currentTimeMs - lastTimeMs;
}
;
