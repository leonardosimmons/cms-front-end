import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { setTitleBuffer, setTitle, setNoteBuffer, setNote, clearCache } from '../state'

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

  const createAddTodoToken = useCallback(() =>
  {
    const todoToken = {
      title: status.buffer.title,
      note: status.buffer.note
    };

    dispatch(setTitle(todoToken.title));
    dispatch(setNote(todoToken.note));
  }, [ dispatch, status.buffer.title, status.buffer.note ]);

  const addTodoHandler = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createAddTodoToken();
    dispatch(clearCache());
  }, [ dispatch, createAddTodoToken ]);

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
