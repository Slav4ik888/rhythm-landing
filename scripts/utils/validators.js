
export const isEmail = (email) => {
  if (!email || typeof email !== 'string') return false;

  // eslint-disable-next-line no-useless-escape
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(emailRegEx)) return true;
  return false;
};

export const isNotEmail = (email) => ! isEmail(email);


/** Is typeof string */
export const isStr = (str) => typeof str === 'string';
/** 
 * v.2023-09-22
 * Is no typeof string
 */
export const isNotStr = (str) => ! isStr(str);

export const isEmptyStr = (str) => {
  if (typeof str !== 'string') return true;
  if (! str || str.trim() === '') return true;
  else return false;
};

export const isNotEmptyStr = (str) => ! isEmptyStr(str);
