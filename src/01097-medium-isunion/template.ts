// type IsUnion<T, U = T> = [T] extends [never] 
//   ? false 
//   : T extends T
//     ? [Exclude<U, T>] extends [never]
//       ? false
//       : true
//     : never

type IsUnion<T, S = T> = IsNever<T> extends true 
  ? false 
  : T extends T 
    ? [S] extends [T] ? 
      false 
      : true
    : false;

// T extends T 触发 Distributive Conditional Types
// 当 T 为联合类型时候，[s] extend [T] 中的T是单个类型，返回得到肯定是falseType
// 只有当T 为非 联合类型时 [s] 和 [T]是相等的