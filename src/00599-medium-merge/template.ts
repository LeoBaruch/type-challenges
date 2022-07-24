type Merge<T extends object, P extends object> = {
  [Key in keyof T | keyof P]: Key extends keyof P ?
  P[Key] : 
  Key extends keyof T ?
  T[Key] :
  never;
}

// Merge是用来合并两个类型，如果有重复的字段类型，则第二个的字段类型覆盖第一个的