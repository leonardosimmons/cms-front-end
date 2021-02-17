import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Time } from './types';

const initialState: Time = {
  month: '',
  date: '',
  year: '',
  hour: '',
  minute: '',
  second: '',
};

//*  ----------------------  REDUCER  ----------------------  *// 
export const clockSlice = createSlice({
  name: 'time',
  initialState,
  reducers: 
  {
    setTime: (state, action: PayloadAction<Time>) => {
      state.month = action.payload.month;
      state.date = action.payload.date;
      state.year = action.payload.year;
      state.hour = action.payload.hour;
      state.minute = action.payload.minute;
      state.second = action.payload.second;
    }
  }
});
export const { setTime } = clockSlice.actions;

//*  -----------------------  STATE  -----------------------  *//
export const currentTime = (state: RootState) => state.time;
export default clockSlice.reducer; 