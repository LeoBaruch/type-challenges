type Replace<T extends string, R extends string, P extends string > =
R extends ''
  ? T
  : T extends `${infer S}${R}${infer E}` 
    ? `${S}${P}${E}`
    : T