"use strict";
// v.2024-01-15
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomBoolean = exports.getRandom28Letters = exports.getRandom20Letters = exports.getRandom10Letters = exports.getRandom5Letters = exports.getRandom3Letters = exports.getRandomLetters = exports.getRandomPasswordChar = exports.getRandomEngLitera = void 0;
exports.getRandomNumber = getRandomNumber;
exports.getRandomNumbers = getRandomNumbers;
exports.getRandomElement = getRandomElement;
exports.getMixedArray = getMixedArray;
const arrays_1 = require("../arrays");
/**
 * Выбор случайного числа в заданном промежутке
 * @param {Number} min - Минимальное допустимое значение (включительно)
 * @param {Number} max - Максимальное допустимое значение (включительно)
 * @return {Number} Случайное целое число в данном промежутке
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
;
/**
 * Составление случайного числа.
 * @return {String} Случайное целое число, заданной длины (кол-во цифр (0-9))
 */
function getRandomNumbers(length) {
    if (!length || length < 1)
        return '';
    return (0, arrays_1.createArr)(length)
        .map(() => getRandomNumber(0, 9).toString())
        .join('');
}
;
/**
 * Возвращает случайную букву англ алфавита
 * @return {string}
 */
const getRandomEngLitera = () => {
    const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return eng[getRandomNumber(0, 25)];
};
exports.getRandomEngLitera = getRandomEngLitera;
/**
 * Возвращает случайную букву англ алфавита, цифру или символ для пароля
 */
const getRandomPasswordChar = () => {
    const eng = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '@', '_', '#', '$', '%', '&', '*'
    ];
    return eng[getRandomNumber(0, 42)];
};
exports.getRandomPasswordChar = getRandomPasswordChar;
// Возвращает строку из n случайных букв
const getRandomLetters = (n) => {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += (0, exports.getRandomEngLitera)();
    }
    return str;
};
exports.getRandomLetters = getRandomLetters;
const getRandom3Letters = () => (0, exports.getRandomLetters)(3);
exports.getRandom3Letters = getRandom3Letters;
const getRandom5Letters = () => (0, exports.getRandomLetters)(5);
exports.getRandom5Letters = getRandom5Letters;
const getRandom10Letters = () => (0, exports.getRandomLetters)(10);
exports.getRandom10Letters = getRandom10Letters;
const getRandom20Letters = () => (0, exports.getRandomLetters)(20);
exports.getRandom20Letters = getRandom20Letters;
const getRandom28Letters = () => (0, exports.getRandomLetters)(28);
exports.getRandom28Letters = getRandom28Letters;
/**
 * Выбор случайного элемента массива
 * @param {Array} array
 * @return {Any} Случайный элемент массива
 */
function getRandomElement(array) {
    const randomIndex = getRandomNumber(0, array.length - 1);
    return array[randomIndex];
}
;
/**
 * Генерация случайного значения true\false
 * @return {Boolean}
 */
const getRandomBoolean = () => {
    return Boolean(getRandomNumber(0, 1));
};
exports.getRandomBoolean = getRandomBoolean;
/**
 * Возвращает перемешанный массив в случайном порядке
 * @param {Array} arr
 * @return {Array}
 */
function getMixedArray(arr) {
    const newArr = [];
    let randomIdx;
    while (arr && arr.length) {
        randomIdx = getRandomNumber(0, arr.length - 1);
        newArr.push(arr[randomIdx]);
        arr = [...arr.slice(0, randomIdx), ...arr.slice(randomIdx + 1)];
    }
    return newArr;
}
;
