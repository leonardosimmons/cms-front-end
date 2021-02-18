import React from 'react';
import { Time } from './types';
import { useSelector } from 'react-redux';
import { currentTime } from './state';

const Clock: React.FunctionComponent = (): JSX.Element => {
  const time: Time = useSelector(currentTime);

  return (
    <>
      <span className={`text-5xl font-semibold`}>{ time.hour }:</span>
      <span className={`text-5xl font-semibold`}>{ time.minute }</span>
      <span className={`mt-7 ml-1 font-thin`}>:{ time.second }</span> 
    </>
  );
};

export default Clock;