type Diff<T extends Record<string, unknown>, P extends Record<string, unknown>> = {
  [Key in (keyof Omit<T, keyof P> | keyof Omit<P, keyof T>)]: Key extends keyof P 
    ? P[Key]
    : Key extends keyof T 
    ? T[Key]
    : never;
}
