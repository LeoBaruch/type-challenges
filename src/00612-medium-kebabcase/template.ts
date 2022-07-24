type KebabCase<T extends string> = T extends `${infer S}${infer Others}`
? Others extends Uncapitalize<Others>
  ? `${Uncapitalize<S>}${KebabCase<Others>}`
  : `${Uncapitalize<S>}-${KebabCase<Uncapitalize<Others>>}`
: T 
