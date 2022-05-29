type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | unknown[] ? DeepReadonly<T[P]> : T[P]
}



/**
 * The difference between {}, object and Record<string, unknown> explained
 */
// Value is assignable to |	{}	| object |	Record<string, unknown>
// "string"               |	Yes |	No	   |  No
// true                   |	Yes	| No	   |  No
// 42                     | Yes | No	   |  No
// 42n	                  | Yes	| No	   |  No
// Symbol()	              | Yes	| No	   |  No
// null	                  | No	| No	   |  No
// undefined	            | No	| No	   |  No
// () => {}	              | Yes |	Yes	   |  No
// [1, 2]	                | Yes	| Yes	   |  No
// []	                    | Yes	| Yes	   |  No
// {foo: "bar"}	          | Yes	| Yes    |  Yes
// {}	                    | Yes	| Yes	   |  Yes

// You can assign anything to {}, except for null and undefined.

// You can assign anything that's not a primitive to object. Primitives are strings, booleans, numbers, big integers, symbols, null and undefined.

// You can only assign objects to Record<string, unknown>.
