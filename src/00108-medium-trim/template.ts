type Trim<T extends string> = T extends 
`${'\n' | `\t` | ' '}${infer P}` 
| `${infer P}${'\n' | `\t` | ' '}`? Trim<P> : T;