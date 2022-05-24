type MyExclude<T, P> = T extends P ? never : T;


// interface IResponse {
//   index: number;
//   num: number;
//   title: string;
//   list: {
//     name: string;
//     age: number;
//   }[];
// }


// type extractKey<T, P extends keyof T> = T[P] extends (infer A)[] ? A : T[P];

// type t1 = extractKey<IResponse, "list">;
// type t2 = extractKey<IResponse, "index">;
