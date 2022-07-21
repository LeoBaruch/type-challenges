type StringToUnion<T extends string> = 
T extends '' ? never :
T extends `${infer Start}${infer Others}` ? `${Start}` |  StringToUnion<Others> : never; 