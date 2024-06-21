import { isNotStr } from '../../../../libs/validators';

/**
 * some.filename.323984098203.pdf => pdf
 */
export const getFileExtention = (filename: string): string => {
  if (! filename || isNotStr(filename)) return ''
  
  // my.image.png => ['my', 'image', 'png'] => 'png'
  return filename.split('.')[filename.split('.').length - 1];
};
