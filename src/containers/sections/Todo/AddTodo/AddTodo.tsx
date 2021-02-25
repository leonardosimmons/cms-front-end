import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setTitleBuffer, setNoteBuffer, addNewTodo, clearBuffer } from '../state';
import AddTodoForm from './AddTodoForm';

const AddTodo: React.FunctionComponent = (): JSX.Element => 
{
  //* ---------------------  STATE  ---------------------- *//
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.todoSection.addTodo)


  //* --------------------  HANDLERS  -------------------- *//

  // USER INPUT HANDLERS
  const titleChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void =>
  {
    const input = e.target.value;
    dispatch(setTitleBuffer(input));
  }, [ dispatch ]);

  const noteChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void =>
  {
    const input = e.target.value;
    dispatch(setNoteBuffer(input));
  }, [ dispatch ]);

  const addTodoHandler = useCallback((e: React.FormEvent<HTMLFormElement>): void => 
  {
    e.preventDefault();
    const todoToken = {
      title: status.buffer.title,
      note: status.buffer.note
    };

    dispatch(addNewTodo(todoToken));
    dispatch(clearBuffer());
  }, [ dispatch, status.buffer.title, status.buffer.note ]);

  //* ---------------------  RENDER  --------------------- *//
  return (
    <AddTodoForm
      title={ status.buffer.title }
      note={ status.buffer.note }
      titleChange={ titleChangeHandler }
      noteChange={ noteChangeHandler }
      submitted={ addTodoHandler }>
    </AddTodoForm>
  );
};

export default AddTodo;
