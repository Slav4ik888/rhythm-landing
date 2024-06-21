"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotEmail = exports.isEmail = void 0;
const isEmail = (email) => {
    if (!email || typeof email !== 'string')
        return false;
    // eslint-disable-next-line no-useless-escape
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegEx))
        return true;
    return false;
};
exports.isEmail = isEmail;
const isNotEmail = (email) => !(0, exports.isEmail)(email);
exports.isNotEmail = isNotEmail;
