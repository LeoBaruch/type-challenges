import type { Equal, Expect } from '@type-challenges/utils';

export type ReplaceKeys<T, P, O> = {
  [K in keyof T]: K extends P 
  ? K extends keyof O
    ? O[K]
    : never
  : T[K]
}



// 当T为联合类型时, [K in keyof T] 触发Distributive Conditional Types 如下示例
interface A  {a: string}
interface B  {b: number}
interface DA {a: 'a'}
interface DB {b: 'b'}

type UnionInterfaceEg = A | B;
type Duplicate = DA | DB;

type MappedUnionInterfaceEg<T> = {
  [K in keyof T]: K
}

type DuplicateInterface =  MappedUnionInterfaceEg<UnionInterfaceEg>;

type cases = [
  Expect<Equal<DuplicateInterface, Duplicate>>
]

