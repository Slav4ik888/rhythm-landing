import { Item } from '../types';
import { updateArrWithItemByField } from '../update-arr-with-item-by-field';

/**
 * Возвращает массив с обновлённым item by id
 * 
 * Если нет массива items, то создаёт его
 * 
 * @param {Item[]} items 
 * @param {object} updateItem 
 * @param {string | array} flags - если стоит `update`, то в обновляемом объекте, обновляются только 
 * те поля что переданы в updateItem, остальные имеющиеся остаются без изменений
 */
export function updateArrById(
  items      : Item[],
  updateItem : Partial<Item>,
  flags?     : string | string[],
): Item[] {
  return updateArrWithItemByField(items, 'id', updateItem, flags);
}
