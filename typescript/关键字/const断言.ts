let x = "hello" as const

type X = typeof x

let y = [10, 20] as const

type Y = typeof y

let z = {text: 'hello'} as const

type Z = typeof z

const locales = [
  {
    locale: "zh-CN",
    language: "中文"
  },
  {
    locale: "en",
    language: "English"
  }
] as const;

type Local = typeof locales[number]['locale']
