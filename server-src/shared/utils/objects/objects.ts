import { isNotObj } from '../../../libs/validators';


export function extend<A, B>(a: A, b: B): A & B {
  return Object.assign({}, a, b);
}

/** do nothing for test */
export const noop = (): void => {};

/** Возвращает клон объекта */
export function cloneObj<O>(obj: O): O {
  if (!obj) return {} as O;

  const newObj = JSON.stringify(obj);
  return JSON.parse(newObj);
};


/** Возвращает длину объекта (кол-во элементов) */
export function objectLength<O extends object>(obj: O): number {
  if (isNotObj(obj)) return 0;

  let result = 0;
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) result++;
  }

  return result;
};


/** True если пустой объект */
export function empty<O extends object>(obj: O): boolean {
  return !objectLength(obj)
}
/** True если не пустой объект */
export function noEmpty<O extends object>(obj: O): boolean {
  return !empty(obj);
}

/**
 * True if all "obj" fields is empty value
 * @param {object} obj - 
 */
export function isEmptyFields<O extends object>(
  obj: O // simple obj
): boolean {
  if (isNotObj(obj)) return true;

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key]) return false
    }
  }
  return true;
};

/**
 * v.2023-10-15
 * False if one of any fields in "obj" with value
 * @param {object} obj - simple obj
 */
export function isNotEmptyFields<O extends object>(
  obj: O
): boolean {
  return ! isEmptyFields(obj);
}


export function arrFromObj<T extends object>(obj: T): Array<T> {
  let arr = [] as T[];
  if (isNotObj(obj)) return arr;

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
  // @ts-ignore
      arr.push(obj[key]);
    }
  }
  return arr;
};


/**
 * Возвращает массив объектов с полем [field] из obj
 * [{status: `Выполняется`}, {status: `На проверке`} ...]
 */
export function arrFromObjByObj<T>(
  obj   : T,     // role || typeListSelect || TaskStatusConst
  field : string // `status`, `currentStatus`
): Array<{ [k: string]: T }> {

  let arr = [] as Array<{ [k: string]: T }>;
  if (isNotObj(obj)) return arr;

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
  // @ts-ignore
      arr.push({ [field]: obj[key] });
    }
  }
  return arr;
};
