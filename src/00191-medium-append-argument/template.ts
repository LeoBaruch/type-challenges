type AppendArgument<F extends (...args: any[]) => any, A> = 
F extends (...args: infer Arg) => infer R ?
(...args: [...Arg, A]) => R
: never;