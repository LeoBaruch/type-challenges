
import type { Equal } from '@type-challenges/utils';

export type Includes<T extends unknown[], P> = 
  T extends [infer First, ...infer Others]
    ? Equal<First, P> extends true
      ? true
      : Includes<Others, P>
    : false;


