`
interface Logger {
  time: number;
  asyncLog:(msg: string) => Promise<string>
  syncLog:(msg: string) => number;
}

type Translate<T> = /** 你需要实现的部分 **/;

// 要求 Translate
//  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
//  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)

// 实现效果如下:
type T0 = Translate<Logger>;

// 等价于
type T0 = {
  // 其它属性被丢弃
  asyncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
  syncLog: (arg: string) => string; // return 类型被调整为跟 arg 保持一致
}

const result: T0 = {
  asyncLog(msg: string) { return msg }
};
`

interface Logger {
  time: number;
  asyncLog:(msg: string) => Promise<string>
  syncLog:(msg: string) => number;
}

type FilterTypes<T, U> = {
  [key in keyof T]: T[key] extends U ? key : never
}

type T = FilterTypes<Logger, Function>[keyof Logger]

type FilterKeys<T, U> = FilterTypes<T, U>[keyof T]

type SubType<T, U> = Pick<T, FilterKeys<T, U>>

// 将参数类型作为返回类型
type ArgAsReturn<T> = {
  [K in keyof T]: T[K] extends ((arg: infer U) => any) ? (arg: U) => U : never
}

type Translate<T> = ArgAsReturn<SubType<Logger, Function>>

// 要求 Translate
//  1. 提取出为函数类型的属性，丢弃掉其它类型的属性
//  2. 将函数返回类型调整为形参类型(假定有且只有一个参数)

// 实现效果如下:

type T10 = Translate<Logger>;

