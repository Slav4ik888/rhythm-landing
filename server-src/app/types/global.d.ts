import { Context as KoaContext } from 'koa';


interface Utms {
  utm_source   : string
  utm_medium   : string
  utm_campaign : string
  utm_term     : string
}


type Context = KoaContext & {
  request: {
    body?: {
      email?   : string
      name?    : string
      company? : string
      utms?    : Utms
    }
  },
  state: {
    callback?  : boolean
    id?        : string
    parentId?  : string 
  }
}

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
