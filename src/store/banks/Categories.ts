import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryDataToken, CategoryDataBank } from '../types/category/category-types';

//*  ----------------------  REDUCER  ----------------------  *//
const initialState: CategoryDataBank = {
  bank: [],
  isLoading: false
};

export const categorySlice = createSlice({
  name: 'categoryBank',
  initialState,
  reducers: {
    /*  ------------------------  BANK  ------------------------  */
    set: (state, action: PayloadAction<CategoryDataToken[]>) => 
    {
      const tokens: CategoryDataToken[] = action.payload;
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


//*  ------------------------  STATE  ------------------------  *//
export const Categories = (state: RootState) => state.categories;
export default categorySlice.reducer;
