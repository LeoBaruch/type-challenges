type LookUp<T extends {type: string}, K extends string> = T extends {type: K} ? T : never;

// distributive conditional types
// 联合类型 extends 时会 对每一个extends匹配 