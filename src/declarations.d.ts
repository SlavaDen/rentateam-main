declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare namespace JsforcePromise {
  interface Deferred {
    someProperty: any
  }
}

declare module 'jsforce' {
  import { Promise as Es6Promise } from 'es6-promise'

  class Promise<T> extends Es6Promise<T> {
    fancyPromiseMethod(): JsforcePromise.Deferred
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';