// type IsUnion<T, U = T> = [T] extends [never] 
//   ? false 
//   : T extends T
//     ? [Exclude<U, T>] extends [never]
//       ? false
//       : true
//     : never

// TODO:
type IsUnion<T, S = T> = IsNever<T> extends true 
  ? false 
  : T extends T 
    ? [S] extends [T] ? 
      false 
      : true
    : false;