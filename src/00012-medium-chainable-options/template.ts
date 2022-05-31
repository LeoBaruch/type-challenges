type Chainable<T extends Record<string, unknown> = {}> = {
  //注意对同名option置为never,匹配test-cases中 ts-expect-error报错
  option<P extends string, V>(name: P extends  keyof T ? never : P, value: V): Chainable<T & {[K in P]: V}>,
  get(): T
}

