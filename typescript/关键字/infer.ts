// 类型提取
interface Dictionary<T = any> {
  [key: string] : T
}

type StrDict = Dictionary<string>

const strDict: StrDict = {a: '1'}

// 条件类型infer

type DictMember<T> = T extends Dictionary<infer U> ? U : never
// 因为传入的{a: string}能被Dictionary<T>继承，Dictionary类型中的T是一个any类型,因此ts就把{a: string}这个类型推断为U，并根据条件表达式返回U类型
// 所以StrDictMember的类型是string
type StrDictMember = DictMember<{a: number}>


