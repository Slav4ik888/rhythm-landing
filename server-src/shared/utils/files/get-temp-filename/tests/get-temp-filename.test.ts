import { getTempFilename } from '..';
import { getFileExtention } from '../../get-file-extention';


describe('getTempFilename', () => {
  test('Filename is undefined', () => {
    const result = getTempFilename(undefined);
    expect(result.length).toEqual(1);
  });
  test('Filename is number - 123456', () => {
    const result = getTempFilename(123456 as unknown as string);
    expect(result.length).toEqual(1);
  });

  test('Filename is number - NaN', () => {
    const result = getTempFilename(NaN as unknown as string);
    expect(result.length).toEqual(1);
  });
  
  test('Filename is empty', () => {
    const result = getTempFilename('');
    expect(result.length).toEqual(1);
  });

  // Valid
  test('Filename is empty.pdf', () => {
    const result = getTempFilename('empty.pdf');
    expect(result.length).toEqual(5);
    expect(getFileExtention(result)).toEqual('pdf');
  });
  test('Filename is empty.pdf', () => {
    const result = getTempFilename('empty.pdf', 1);
    expect(result.length).toEqual(5);
    expect(getFileExtention(result)).toEqual('pdf');
  });

  test('Filename is empty.pdf', () => {
    const result = getTempFilename('empty.pdf', 10);
    expect(result.length).toEqual(14);
    expect(getFileExtention(result)).toEqual('pdf');
  });

  test('Filename is get-file.extention.test.ts', () => {
    const result = getTempFilename('get-file.extention.test.ts', 10);
    expect(result.length).toEqual(13);
    expect(getFileExtention(result)).toEqual('ts');
  });

});

// npm run test:unit get-temp-filename.test.ts
