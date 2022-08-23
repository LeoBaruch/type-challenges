type RemoveIndexSignature<T> = {
  [
    K in keyof T as string extends K ?
      never
      : number extends K
        ? never
        : symbol extends K
          ? never
          : K
  ] : T[K]
}


//  区分索引签名[key: 类型]和确定的key 要用'类型 extends k'确定
type Demo = {
  baz: number // key为string
  [key: number]: any // 索引签名 number
  foo(): void // 方法
}