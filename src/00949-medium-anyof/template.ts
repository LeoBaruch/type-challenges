
type IsEmptyObj<T> =  keyof T extends never ? true : false;

type IsTrue<T> = T extends 0 |false | '' | [] 
? false
: IsEmptyObj<T> extends true
? false
: true;

type AnyOf<T extends unknown[]> = T extends [infer First, ...infer Others] 
? IsTrue<First> extends true
  ? true
  : AnyOf<Others>
: false; 