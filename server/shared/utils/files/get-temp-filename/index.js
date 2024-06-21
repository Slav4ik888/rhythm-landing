"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTempFilename = void 0;
const random_1 = require("../../random");
const get_file_extention_1 = require("../get-file-extention");
/**
 * Возвращает имя файла заданной длины, с расширением начального файла
 *  => 461j9wwy9i.pdf
 */
const getTempFilename = (filename, _length = 1) => {
    const length = _length < 1 ? 1 : _length, // min filename length = 1
    ext = (0, get_file_extention_1.getFileExtention)(filename), // pdf
    maxLetters = (0, random_1.getRandomNumber)(0, length), maxNumbers = length - maxLetters, letters = (0, random_1.getRandomLetters)(maxLetters).split(''), numbers = (0, random_1.getRandomNumbers)(maxNumbers).split(''), name = (0, random_1.getMixedArray)([...letters, ...numbers]).join('');
    return `${name}${ext ? '.' + ext : ''}`;
};
exports.getTempFilename = getTempFilename;
