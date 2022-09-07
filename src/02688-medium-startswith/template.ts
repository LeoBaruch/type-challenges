type StartsWith<T extends string, P extends string> = [T] extends [`${P}${infer O}`]
  ? true : false;