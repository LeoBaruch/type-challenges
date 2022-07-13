type Flatten<T extends unknown[]> = T extends [infer Start, ... infer Others] ?
Start extends unknown[] ?
[...Flatten<Start>, ...Flatten<Others>] :
[Start, ...Flatten<Others>]:
T;