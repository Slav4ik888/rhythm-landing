import { Context as KoaContext } from 'koa';


type Context = KoaContext & {
  request: {
    body?: {
      email?: string
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
