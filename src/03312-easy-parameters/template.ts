type MyParameters<T extends Function> = T extends (...args: infer Args) => any ? Args : never;