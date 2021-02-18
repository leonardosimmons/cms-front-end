import { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Time } from '../../components/time/types';
import { setTime } from '../../components/time/state';

export const useTime = (): void => {
  const dispatch = useDispatch();
  const timeRef = useRef<Time>();

  const getTime = useCallback((): Time => {
    const [month, date, year]    = new Date().toLocaleDateString("en-US").split("/");
    const [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);

    return { month, date, year, hour, minute, second }
  }, []);

  useEffect(() => 
  {
    const getCurrentTime = (): void => 
    {
      timeRef.current = getTime();
    }

    const interval = setInterval(() => 
    {
      getCurrentTime();
      dispatch(setTime(timeRef.current as Time));
    }, 1000);
    

    return () => {
      clearInterval(interval);
    }
  }, [ dispatch, getTime ]);
};
