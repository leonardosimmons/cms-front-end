import axios from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import  Action from '../keys/actions/actions';

/*  --------------------  INTERFACES  --------------------  */

interface CategoryToken {
  id: number;
  title: string;
  link?: string;
};

interface CategoryTokenBank {
  bank: CategoryToken[];
  loading: boolean;
};


/*  ----------------------  REDUCER  ----------------------  */
const initialState: CategoryTokenBank = {
  bank: [],
  loading: false
};

export const categorySlice = createSlice({
  name: 'categoryBank',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CategoryToken[]>) => 
    {
      const tokens: CategoryToken[] = action.payload;
      state.bank = tokens;
      state.loading = false;
      console.log('Done loading')
    },

    loading: (state) => 
    {
      console.log('loading');
      state.loading = true;
    }
  }
});
export const { set, loading } = categorySlice.actions;


/*  ------------------------  ASYNC  ------------------------  */
export const load = (): AppThunk => (dispatch, getState) =>
{
  dispatch(loading());
  const url = getState().api.categories;
  axios.get<CategoryToken[]>(url, {
    headers: { "Content-Type": "application/json" }})
    .then(res => res.data)
    .then(data => dispatch(set(data)))
    .catch(e => console.log(e))
}

/*  ------------------------  STATE  ------------------------  */
export const Categories = (state: RootState) => state.categories;
export default categorySlice.reducer;