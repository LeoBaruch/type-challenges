type GetSuffix<T> = T extends `${infer Num}%` ? [Num, '%'] : [T, ''];

type PercentageParser<T> = T extends `${infer Left}${infer Right}` 
  ? Left extends '+' | '-' 
    ? [Left, ...GetSuffix<Right>]
    : ['', ...GetSuffix<T>]
  : ['', '', '']