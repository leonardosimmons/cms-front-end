import React, { useCallback } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setCityBuffer, setSearchInquiry, setStateBuffer } from './state';
import { CityToken } from './types';
import { UnitedStatesCities } from './cities/UnitedStates';

import Element from '../../store/keys';
import WeatherSearchForm from './forms';
import SideBarContentBox from '../../components/boxes/content/sidebar';

const WeatherWidget: React.FunctionComponent = (): JSX.Element =>
{
  //* ------------------------------  STATE  -------------------------------  *//
  const dispatch = useDispatch();
  const context = useSelector((state: RootState) => state.weatherWidget);


  //* -----------------------------  HANDLERS  -----------------------------  *//
  const cityInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
  {
    dispatch(setCityBuffer(e.target.value));
  }, [ dispatch ]);
  
  const stateInputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>
  {
    dispatch(setStateBuffer(e.target.value));
  }, [ dispatch ]);

  const searchHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => 
  {
    e.preventDefault();
    dispatch(setSearchInquiry());
  }, [ dispatch ]);


  //* ------------------------------  RENDER  ------------------------------  *//
  return (
    <SideBarContentBox
      parent={ Element.WEATHER_WIDGET }>
      <div className={`flex flex-col justify-center items-center font-semibold text-xl`}>
        <p>Portland</p>
        <h2 className={`font-normal`}>Currently:</h2>
        <span className={`w-32 text-5xl text-center mb-2 pb-2`}>
          48<span className={`font-thin`}>&#176;</span>
        </span>
      </div>
      <WeatherSearchForm
        cityInput={ context.search.cityBuffer }
        stateInput={ context.search.stateBuffer }
        cityChange={ cityInputHandler }
        stateChange={ stateInputHandler }
        submitted={ searchHandler }>
      </WeatherSearchForm>
    </SideBarContentBox>
  );
};

export default WeatherWidget;
