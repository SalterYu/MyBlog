interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false
};

type TodoPreview1 = Omit<Todo, "description">

// 从TODO中取出Todo类型的key，并利用Exclude排除title类型，再用pick获取Todo中的这些类型
type a = Pick<Todo, Exclude<keyof Todo, 'description'>>

