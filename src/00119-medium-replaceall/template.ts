type ReplaceAll<T extends string, R extends string, P extends string > =
R extends ''
  ? T
  : T extends `${infer S}${R}${infer E}` 
    ? `${S}${P}${ReplaceAll<E, R, P>}`
    : T


    type B = ReplaceAll<'foobarfoobar', 'ob', 'b'>
    type C = ReplaceAll<'foboorfoboar', 'bo', 'b'>