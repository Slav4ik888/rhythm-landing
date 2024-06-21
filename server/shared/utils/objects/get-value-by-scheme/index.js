"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueByScheme = getValueByScheme;
/**
 * v.2023-05-28
 * Object value by scheme, else false
 * Поддерживает только вложенные объекты, not arrays
 * max вложенность = 8
 */
function getValueByScheme(obj, scheme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
    if (!obj || !scheme)
        return undefined;
    const fields = scheme.split('.');
    if (fields.length === 0 || fields.length > 8)
        return undefined;
    // @ts-ignore
    if (fields.length === 1)
        return obj[fields[0]];
    // @ts-ignore
    if (fields.length === 2)
        return (_a = obj[fields[0]]) === null || _a === void 0 ? void 0 : _a[fields[1]];
    // @ts-ignore
    if (fields.length === 3)
        return (_c = (_b = obj[fields[0]]) === null || _b === void 0 ? void 0 : _b[fields[1]]) === null || _c === void 0 ? void 0 : _c[fields[2]];
    // @ts-ignore
    if (fields.length === 4)
        return (_f = (_e = (_d = obj[fields[0]]) === null || _d === void 0 ? void 0 : _d[fields[1]]) === null || _e === void 0 ? void 0 : _e[fields[2]]) === null || _f === void 0 ? void 0 : _f[fields[3]];
    // @ts-ignore
    if (fields.length === 5)
        return (_k = (_j = (_h = (_g = obj[fields[0]]) === null || _g === void 0 ? void 0 : _g[fields[1]]) === null || _h === void 0 ? void 0 : _h[fields[2]]) === null || _j === void 0 ? void 0 : _j[fields[3]]) === null || _k === void 0 ? void 0 : _k[fields[4]];
    // @ts-ignore
    if (fields.length === 6)
        return (_q = (_p = (_o = (_m = (_l = obj[fields[0]]) === null || _l === void 0 ? void 0 : _l[fields[1]]) === null || _m === void 0 ? void 0 : _m[fields[2]]) === null || _o === void 0 ? void 0 : _o[fields[3]]) === null || _p === void 0 ? void 0 : _p[fields[4]]) === null || _q === void 0 ? void 0 : _q[fields[5]];
    // @ts-ignore
    if (fields.length === 7)
        return (_w = (_v = (_u = (_t = (_s = (_r = obj[fields[0]]) === null || _r === void 0 ? void 0 : _r[fields[1]]) === null || _s === void 0 ? void 0 : _s[fields[2]]) === null || _t === void 0 ? void 0 : _t[fields[3]]) === null || _u === void 0 ? void 0 : _u[fields[4]]) === null || _v === void 0 ? void 0 : _v[fields[5]]) === null || _w === void 0 ? void 0 : _w[fields[6]];
    // @ts-ignore
    if (fields.length === 8)
        return (_3 = (_2 = (_1 = (_0 = (_z = (_y = (_x = obj[fields[0]]) === null || _x === void 0 ? void 0 : _x[fields[1]]) === null || _y === void 0 ? void 0 : _y[fields[2]]) === null || _z === void 0 ? void 0 : _z[fields[3]]) === null || _0 === void 0 ? void 0 : _0[fields[4]]) === null || _1 === void 0 ? void 0 : _1[fields[5]]) === null || _2 === void 0 ? void 0 : _2[fields[6]]) === null || _3 === void 0 ? void 0 : _3[fields[7]];
}
