import { Utms } from '../../../app/types/global';
import { TemplateType } from '../types';
import { getDiscountName, UtmsRes } from './get-discount-name';


/**
 * Возвращает название Template для письма рассылки,
 * а перед этим проверяет, есть ли скидка - "Прошли из письма" или "Партнёрская"
 */
export const getTemplateByDiscountName = (templateType: TemplateType, utms: Utms): string => {
  const discountName = getDiscountName(utms);
  const isDemo = templateType === TemplateType.GET_DEMO;

  switch (discountName) {
    case UtmsRes.DISCOUNT_BY_LETTER:
      return isDemo ? 'get-demo-discount-by-letter' : 'get-prices-discount-by-letter';
    
    case UtmsRes.DISCOUNT_BY_PARTNER:
      return isDemo ? 'get-demo-discount-by-partner' : 'get-prices-discount-by-partner';
    
    default: return isDemo ? 'get-demo' : 'get-prices';
  }
}
