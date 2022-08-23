type MinusOne<T extends number, P extends any[] = []> = T extends P['length'] 
  ? P extends [infer Temp, ...infer Rest]
    ? Rest['length']
    : never
  : MinusOne<T, [0, ...P]>

// TODO: 因为ts限制递归次数，所以比较大数字待重新做·····