import React from 'react';

const TodoBar: React.FunctionComponent = ({ children }): JSX.Element => 
{
  return (
    <div className={` h-14 w-full bg-white border-gray-300 border-2 rounded-t-lg mb-1`}>
      <div className={`h-full w-full m-auto flex justify-between items-center`}>
        { children }
      </div>
    </div>
  );
};

export default TodoBar;