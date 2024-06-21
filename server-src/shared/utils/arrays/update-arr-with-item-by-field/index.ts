import { cloneObj, updateObject } from '../../objects';
import type { Item } from '../types';


/**
 * v.2023-09-17
 * Возвращает массив с обновлённым item
 * Если нет массива items, то создаёт его
 * 
 * @param {Item} items 
 * @param {string} field - 
 * @param {object} updateItem 
 * @param {string | array} flags - 
 * @return {array} items 
 */
export function updateArrWithItemByField(
  items      : Item[],
  field      : string,          // поле по которому ищется объект: `id` || `email` || any
  updateItem : Partial<Item>,
  flags?     : string | string[] // если стоит `update`, то в обновляемом объекте, обновляются только 
                                 // те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
): Item[] {
  if (! updateItem) return items

  let newItems = [] as Item[];

  // Если нет массива items, то создаём его
  if (! items) { 
    newItems.push(updateItem as Item);
    return newItems;
  }

  const idx = items.findIndex((item) => item[field] === updateItem[field]);
  newItems = [...items];

  // Если есть - обновляем
  if (idx !== -1) { 
    let newUpdateItem = cloneObj(updateItem);

    // Если указан флаг, обрабатываем
    if (flags?.includes('update')) {
      newUpdateItem = updateObject(items[idx], updateItem);
    }

    newItems = [...newItems.slice(0, idx), newUpdateItem as Item, ...newItems.slice(idx + 1)];
  
  } else { // Нету - добавляем
    newItems.push(updateItem as Item);
  }

  return newItems;
};
