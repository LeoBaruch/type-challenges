type DropChar<T extends string, S extends string> = T extends `${infer First}${S}${infer Rest}`
  ? `${First}${DropChar<Rest, S>}`
  : T; 
