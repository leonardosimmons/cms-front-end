import React from 'react';
import { TodoSectionProps } from './types';

import Element from '../../../store/keys/keys';
import TodoBar from './TodoBar';
import AddTodo from './AddTodo';


const TodoSection: React.FunctionComponent<TodoSectionProps> = ({ parent }): JSX.Element => 
{
  return (
    <div className={`${ parent + '__' + Element.TODO_SECTION } 
     h-27r w-75r flex flex-col justify-center items-center max-w-full mt-3`}>
      <h2 className={` w-27r text-4xl font-semibold self-start mb-3 mx-5 border-b-2 leading-relaxed`}>
        What's On Your Agenda:
      </h2>
      <div className={`
        ${ Element.TODO_SECTION }__container h-full w-95/100 bg-gray-300 rounded-lg shadow-inner`}>
          <TodoBar>
            <AddTodo />
            {/* FILTER TODOS component*/}
          </TodoBar>
          {/* ADD TODO LIST component */}
      </div>
    </div>
  );
};

export default TodoSection;