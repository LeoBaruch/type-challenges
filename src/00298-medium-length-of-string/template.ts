type LengthOfString<T extends string> = StringToArray<T>['length']


type StringToArray<T extends string> = 
T extends '' ? [] :
T extends `${infer S}${infer Other}` ?
readonly [S, ...StringToArray<Other>] :
[]
