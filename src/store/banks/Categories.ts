import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';


/*  --------------------  INTERFACES  --------------------  */

interface CategoryToken {
  id: number;
  title: string;
  link?: string;
};

interface CategoryTokenBank {
  bank: CategoryToken[];
  isLoading: boolean;
};


/*  ----------------------  REDUCER  ----------------------  */
const initialState: CategoryTokenBank = {
  bank: [],
  isLoading: false
};

export const categorySlice = createSlice({
  name: 'categoryBank',
  initialState,
  reducers: {
    /*  ------------------------  BANK  ------------------------  */
    set: (state, action: PayloadAction<CategoryToken[]>) => 
    {
      const tokens: CategoryToken[] = action.payload;
      state.bank = tokens;
    },
    /*  ----------------------  isLOADING  ----------------------  */
    isLoading: (state) => 
    {
      state.isLoading = !state.isLoading;
    }
  }
});
export const { set, isLoading } = categorySlice.actions;


/*  ------------------------  ASYNC  ------------------------  */
export const load = (): AppThunk => (dispatch, getState) =>
{
  dispatch(isLoading());
  const url = getState().api.categories;
  axios.get<CategoryToken[]>(url, {
    headers: { "Content-Type": "application/json" }})
    .then(res => {
      if (res.status === 200) { 
        return res.data 
      }
      throw new Error('Error: Something went wrong!');
    })
    .then(data => dispatch(set(data!)))
    .then(() => dispatch(isLoading()))
    .catch(e => console.log(e))
}


/*  ------------------------  STATE  ------------------------  */
export const Categories = (state: RootState) => state.categories;
export default categorySlice.reducer;
