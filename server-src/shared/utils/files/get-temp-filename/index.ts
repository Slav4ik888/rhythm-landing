import { getMixedArray, getRandomLetters, getRandomNumber, getRandomNumbers } from '../../random';
import { getFileExtention } from '../get-file-extention';

/**
 * Возвращает имя файла заданной длины, с расширением начального файла
 *  => 461j9wwy9i.pdf
 */
export const getTempFilename = (filename: string, _length: number = 1): string => {
  const
    length     = _length < 1 ? 1 : _length, // min filename length = 1
    ext        = getFileExtention(filename),   // pdf
    maxLetters = getRandomNumber(0, length),
    maxNumbers = length - maxLetters,
    letters    = getRandomLetters(maxLetters).split(''),
    numbers    = getRandomNumbers(maxNumbers).split(''),
    name       = getMixedArray([...letters, ...numbers]).join('');
  
  return `${name}${ext ? '.' + ext : ''}`;
};
