type Absolute<T extends number | string | bigint> = 
`${T}` extends `-${infer N}` ? `${N}` : `${T}`;