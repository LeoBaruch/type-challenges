// type MyOmit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K> ]: T[P];
// }


type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
