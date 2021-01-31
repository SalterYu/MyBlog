const test = () => 1

type T0 = ReturnType<() =>string>; // string
type T1 = ReturnType<(s: string) =>void>; // void
type T2 = ReturnType< <T>() => T>; // unknown
type T3 = ReturnType< <T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<any>; // any
type T5 = ReturnType<never>; // any
type T6 = ReturnType<string>; // Error
type T7 = ReturnType<Function>; // Error

