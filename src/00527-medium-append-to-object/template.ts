type AppendToObject<T extends object, K extends string | number | symbol, V> ={
  [Key in (keyof T | K)]: Key extends keyof T ? T[Key] : V
}