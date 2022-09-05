type PickByType<T extends Record<string, any>, K> = {
  [Key in keyof T as (K extends T[Key] ? Key : never )]: T[Key]
}