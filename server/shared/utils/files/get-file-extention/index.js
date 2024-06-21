"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExtention = void 0;
const validators_1 = require("../../../../libs/validators");
/**
 * some.filename.323984098203.pdf => pdf
 */
const getFileExtention = (filename) => {
    if (!filename || (0, validators_1.isNotStr)(filename))
        return '';
    // my.image.png => ['my', 'image', 'png'] => 'png'
    return filename.split('.')[filename.split('.').length - 1];
};
exports.getFileExtention = getFileExtention;
