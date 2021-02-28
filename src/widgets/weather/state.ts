import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { WeatherContext, CityToken } from './types';

const initialState: WeatherContext = 
{
  currentCity: 
  {
    id: 0,
    state: '',
    country: '',
    coord: 
    {
      lon: 0,
      lat: 0,
    }
  },

  search:
  {
    cityBuffer: '',
    stateBuffer: '',
    cityInquiry: '',
    stateInquiry: '',
    result: 
    {
      id: 0,
      state: '',
      country: '',
      coord: 
      {
        lon: 0,
        lat: 0,
      }
    },
  }
};

//*  ----------------------  REDUCER  ----------------------  *// 
const weatherSlice = createSlice({
  name: 'eather',
  initialState,
  reducers:
  {
    //* -------------------- CITY CONTEXT -------------------- *//

    setCurrentCity: (state, action: PayloadAction<CityToken>) =>
    {
      state.currentCity = action.payload;
    },


    //* ------------------- SEARCH CONTEXT ------------------- *//

    setCityBuffer: (state, action: PayloadAction<string>) =>
    {
      state.search.cityBuffer = action.payload;
    },
    setStateBuffer: (state, action: PayloadAction<string>) =>
    {
      state.search.stateBuffer = action.payload;
    },
    setSearchInquiry: (state) =>
    {
      state.search.cityInquiry = state.search.cityBuffer;
      state.search.stateInquiry = state.search.stateBuffer;
    },
    setResult: (state, action: PayloadAction<CityToken>) =>
    {
      state.search.result = action.payload;
    },
    clearBuffer: (state) =>
    {
      state.search.cityBuffer = '';
      state.search.stateBuffer = '';
    },
    clearInquiries: (state) =>
    {
      state.search.cityInquiry = '';
      state.search.stateInquiry = '';
    },
    clearResult: (state) =>
    {
      state.search.result = { id: 0, state: '', country: '', coord: { lon: 0, lat: 0 } };
    }
  }
});
export const 
{ 
  setCurrentCity,
  setCityBuffer, setStateBuffer, setSearchInquiry, setResult
} = weatherSlice.actions;

//*  -----------------------  ASYNC  -----------------------  *//

//*  -----------------------  STATE  -----------------------  *//
export const Weather = ((state: RootState) => state.weatherWidget);
export default weatherSlice.reducer;
