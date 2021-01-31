interface Person {
  name: string
  age: number
}

type K1 = Person['name']
type K2 = keyof K1

interface child {
  [key: K1]
}

// K2 是从string对象中取所有的key
const a: K2 = 'indexOf'
