import { Utms } from '../../app/types/global';

export interface EmailConfig {
  user : string
  pass : string
}

interface Locals {
  greetting?                  : string
  name?                       : string
  url_site?                   : string
  url_confirmation?           : string
  url_demo?                   : string
  url_site_primary_secondary? : string
  telegramm?                  : string
  utms?                       : Utms
  email?                      : string
  companyId?                  : string
  companyName?                : string
  platform_name?              : string
  password?                   : string
}

interface Attachment {
  filename : string // filename to be reported as the name of the attached file. Use of unicode is allowed.
  path     : string // path to the file if you want to stream the file instead of including it (better for larger attachments)
}


export interface SendEmailOptions {
  template     : string,
  locals       : Locals,
  to           : string,
  subject      : string,
  attachments? : Attachment[]
}

export enum TemplateType {
  GET_DEMO   = 'get_demo',
  GET_PRICES = 'get_prices'
}
