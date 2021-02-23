export type TodoDataToken = {
  id: string;
  title: string;
  note: string;
  tags: string;
  stage: number;
  created: number;
  completed: boolean;
};

export type TodoStatus = {
  bank: TodoDataToken[];
  current: TodoDataToken[];
}

export type TodoProps = {
  title: string;
  note: string;
};

export type TodoSectionProps = {
  parent: string;
};

export type TodoSectionConfig = {
  previewMode: boolean,
  todos: {
    bank: TodoDataToken[];
    current: TodoDataToken[];
  }
};