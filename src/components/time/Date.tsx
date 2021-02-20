import React from 'react';
import { Time } from '../time/types';
import { useSelector } from 'react-redux';
import { currentTime } from './state';
import { getMonthName } from '../../helpers/functions';

const Date: React.FunctionComponent = (): JSX.Element => {
  const date: Time = useSelector(currentTime);
  return (
    <>
      <span className={`text-xl font-medium`}>{ getMonthName(date.month) }&nbsp;</span>
      <span className={`text-xl font-medium`}>{ date.date }</span>
    </>
  );
};

export default Date;