import { Utms } from '../../../app/types/global';
import { checkPartnerName } from './check-partner-name';



export enum UtmsRes {
  NOT_DISCOUNT        = 'not_discount',
  DISCOUNT_BY_LETTER  = 'discount_by_letter',
  DISCOUNT_BY_PARTNER = 'discount_by_partner'
}


export const getDiscountName = (utms: Utms): UtmsRes => {
  // Рассылка 1е письмо
  if (utms?.utm_source === 'sendsay' &&
    utms?.utm_medium === 'email' &&
    utms?.utm_campaign === 'start' &&
    utms?.utm_term === 'first_letter') return UtmsRes.DISCOUNT_BY_LETTER;
  
  // По партнёрской ссылке
  if (utms?.utm_source === 'partners_links' && 		
    utms?.utm_medium === 'link' &&
    utms?.utm_campaign === 'partners' &&
    checkPartnerName(utms?.utm_term)) return UtmsRes.DISCOUNT_BY_PARTNER;
  
  return UtmsRes.NOT_DISCOUNT;
}
