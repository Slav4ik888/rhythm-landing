import { PARTNERS } from '../../../app/config';


export const checkPartnerName = (utm_term: string): Boolean => Boolean(
  PARTNERS.find((partner) => utm_term === partner)
);
