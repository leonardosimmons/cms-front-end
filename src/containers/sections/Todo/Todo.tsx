import React from 'react';

export type TodoProps = {
  title: string;
  note: string;
  tags?: string;
  stage?: number;
  created?: string;
  completed?: boolean;
}

const Todo: React.FunctionComponent<TodoProps> = ({ title, note }): JSX.Element => 
{
  return (
    <div className={`flex items-center my-1 mx-4 h-20 bg-white shadow rounded`}>
      <h3 className={`flex-25 mx-4 text-2xl font-semibold border-r-2 border-gray-600 border-solid`}>
        { title }
      </h3>
      <div className={`flex flex-col justify-center`}>
        <p className={`text-xs`}>Description:</p>
        <p className={`text-lg`}>{ note }</p>
      </div>
    </div>
  );
};

export default Todo;