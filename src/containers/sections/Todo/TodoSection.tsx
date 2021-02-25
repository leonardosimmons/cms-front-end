import React, { useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

import { TodoSectionProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { status, updateTodoList } from './state';

import Element from '../../../store/keys/keys';
import TodoBar from './TodoBar';
import AddTodo from './AddTodo';
import Todo from './Todo';


const TodoSection: React.FunctionComponent<TodoSectionProps> = ({ parent }): JSX.Element => 
{
  const dispatch = useDispatch();
  const context = useSelector((state: RootState) => state.todoSection);

  //* ----------------------  IDLE CHECK  ---------------------- *//
  const statusRef = useRef<string>();

  useEffect(() => 
  {
    statusRef.current = context.status;
    const idleCheck = setTimeout(() => {
      if (statusRef.current === context.status)
      {
        dispatch(status(Element.IDLE));
      }
    }, 5000);

    return () => {
      clearTimeout(idleCheck);
    }

  }, [ dispatch, context.status ]);


  //* --------------------  AUTO UPDATE  -------------------- *//
  const updateTodos = useCallback(() =>
  {
    dispatch(status(Element.PENDING));
    axios.get(process.env.REACT_APP_READ_TODOS_API as string, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => 
      {
        if (res.status === 200 && res.statusText === 'OK')
          return res.data
        else
          throw new Error('Unable to update todo list');
      }
    )
    .then(todos => {
      todos && 
        dispatch(updateTodoList(todos.sort((a: any, b: any) => (a.created < b.created) ? 1 : -1)));
    })
    .then(() => dispatch(status(Element.SUCCESS)))
    .catch(e => {
      dispatch(status(Element.ERROR));
      console.log(e);
    });

  }, [ dispatch ]);

  // watches and updates the displayed TODO list 
  useEffect(() => 
  {
    const source = axios.CancelToken.source();
    if (context.status === Element.UPDATE)
      updateTodos();

    return () => {
      source.cancel();
    }
  }, [ dispatch, updateTodos, context.status ]);

  //* -----------------------  RENDER  ----------------------- *//
  return (
    <div className={`${ parent + '__' + Element.TODO_SECTION } 
     h-27r w-75r flex flex-col justify-center items-center max-w-full mt-3 relative`}>
      <h2 className={` w-27r text-4xl font-semibold self-start mb-3 mx-5 border-b-2 leading-relaxed`}>
        What's On Your Agenda:
      </h2>
      <div className={`
        ${ Element.TODO_SECTION }__container h-full w-95/100 bg-gray-300 rounded-lg shadow-inner overflow-y-auto overflow-x-hidden relative`}>
          <TodoBar>
            <AddTodo />
            {/* FILTER TODOS component*/}
          </TodoBar>
          <div className={`w-full`}>
          {
            context.todos.current && 
            context.todos.current.map(todo => (
              <Todo
                key={ todo.id }
                title={ todo.title }
                note={ todo.note }>
              </Todo>
            ))
          }
          </div>
      </div>
    </div>
  );
};

export default TodoSection;