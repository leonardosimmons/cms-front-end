import React, { useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

import { TodoSectionProps } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { clearTodoList, deleteTodo, status, updateTodoList, setFilterBuffer, resetFilter, clearFilterCache, setFilterInquiry, filterTodo } from './state';

import Element from '../../../store/keys/keys';
import TodoBar from './TodoBar';
import AddTodo from './AddTodo';
import Todo from './Todo';
import Input from '../../../components/input';


const TodoSection: React.FunctionComponent<TodoSectionProps> = ({ parent }): JSX.Element => 
{
  const dispatch = useDispatch();
  const context = useSelector((state: RootState) => state.todoSection);

  //* ----------------------  IDLE CHECK  ---------------------- *//
  const statusRef = useRef<string>();

  useEffect(() => 
  {
    statusRef.current = context.status;
    const idleCheck = setTimeout(() => 
    {
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
  const updateTodos = useCallback((): void =>
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
    .then(todos => 
      {
        if(todos) {
          dispatch(updateTodoList(todos.sort((a: any, b: any) => (a.created < b.created) ? 1 : -1)));
        } else {
            dispatch(clearTodoList());
        }
      }
    )
    .then(() => dispatch(status(Element.SUCCESS))) 
    .catch(e => {
      dispatch(status(Element.ERROR));
      console.log(e);
    });

  }, [ dispatch ]);

  // watches and updates the displayed TODO list (RUNS ONLY ON UPDATE)
  useEffect(() => 
  {
    const source = axios.CancelToken.source();
    if (context.status === Element.UPDATE)
      updateTodos();

    return () => {
      source.cancel();
    }
  }, [ dispatch, updateTodos, context.status ]);


  //* ----------------------  HANDLERS  ---------------------- *//
  const deleteTodoHandler = (id: string): void =>
  {
    dispatch(deleteTodo(id));
  };

  const filterInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => 
  {
    dispatch(setFilterBuffer(e.target.value));
  }, [ dispatch ]);

  const filterClickHandler = useCallback((): void =>
  {
    dispatch(clearFilterCache());
    
    const inquiry = context.filter.buffer;
    dispatch(setFilterInquiry(inquiry));
    dispatch(filterTodo());
  }, [ dispatch, context.filter.buffer ]);

  const resetClickHandler = useCallback((): void =>
  {
    dispatch(resetFilter());
    dispatch(status(Element.UPDATE));
  }, [ dispatch ]);

  //* -----------------------  RENDER  ----------------------- *//
  return (
    <div className={`${ parent + '__' + Element.TODO_SECTION } 
     h-28r w-75r flex flex-col justify-center items-center max-w-full mt-3 relative`}>
      <h2 className={` w-27r text-4xl font-semibold self-start mb-3 mx-5 border-b-2 leading-relaxed`}>
        What's On Your Agenda:
      </h2>
      <div className={`
        ${ Element.TODO_SECTION }__container h-full w-95/100 bg-gray-300 rounded-lg shadow-inner overflow-y-auto overflow-x-hidden relative noselect`}>
          <TodoBar>
            <div className={`flex mx-4`}>
              <p className={`font-semibold mt-1`}>NEW TODO:</p>
              <AddTodo />
            </div>
            <div className={`flex mr-2 justify-center items-center`}>
              <Input
                name={ Element.TODO_FILTER}
                value={ context.filter.buffer }
                changed={ filterInputHandler }
                filter={ filterClickHandler}
                reset={ resetClickHandler }
                inputStyle={`mx-2 border-gray-300 border-2 border-solid input-focus`}
                buttonStyle={`mx-1`}>
              </Input>
            </div>
          </TodoBar>
          <div className={`w-full`}>
          {
            context.todos.current && 
            context.todos.current.map((todo, index) => (
              <Todo
                key={ index }
                title={ todo.title }
                note={ todo.note }
                clicked={ ()=> deleteTodoHandler(todo.id) }>
              </Todo>
            ))
          }
          </div>
      </div>
    </div>
  );
};

export default TodoSection;