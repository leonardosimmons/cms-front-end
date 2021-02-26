//* -------------  STATE  ------------- *//
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


//* -------------  PROPS  ------------- *//
export type TodoProps = {
  title: string;
  note: string;
};


//* ------------  ADD TODO  ------------ *//
export type AddTodoToken = {
  title: string;
  note: string;
};

export type AddTodoFormProps = {

  title: string;
  note: string;
  titleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  noteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitted: (e: React.FormEvent<HTMLFormElement>) => void;
};

//* -------------  SEARCH  ------------- *//
export type TodoFilter = {
  buffer: string;
  inquiry: string;
  result: TodoDataToken[];
}

//* ------------  SECTION  ------------ *//
export type TodoSectionProps = {
  parent: string;
};

export type TodoSectionConfig = {
  previewMode: boolean,
  todos: {
    bank: TodoDataToken[];
    current: TodoDataToken[];
  },
  addTodo: {
    buffer: {
      title: string;
      note: string;
    }
  },
  filter: TodoFilter,
  status: string;
};