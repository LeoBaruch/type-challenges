declare function PromiseAll<T extends unknown[]>(params: readonly [...T]):  Promise<{
  [K in keyof T]: T[K] extends Promise<infer P> ? P : T[K]
}>