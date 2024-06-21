import { getFileExtention } from '..';


describe('getFileExtention', () => {
  test('Filename is undefined', () => expect(getFileExtention(undefined)).toEqual(''));
  test('Filename is number - 123456', () => expect(getFileExtention(123456 as unknown as string)).toEqual(''));
  test('Filename is number - NaN', () => expect(getFileExtention(NaN as unknown as string)).toEqual(''));
  test('Filename is boolean - true', () => expect(getFileExtention(true as unknown as string)).toEqual(''));
  test('Filename is boolean - false', () => expect(getFileExtention(false as unknown as string)).toEqual(''));
  test('Filename is empty', () => expect(getFileExtention('')).toEqual(''));

  // Valid
  test('Filename is empty.pdf', () => expect(getFileExtention('empty.pdf')).toEqual('pdf'));
  test('Filename is get-file.extention.test.ts', () => expect(getFileExtention('get-file.extention.test.ts')).toEqual('ts'));
});

// npm run test:unit get-file-extention.test.ts
