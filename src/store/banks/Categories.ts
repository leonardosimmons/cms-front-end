import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, CategoryBank } from '../types/category';

//*  ----------------------  REDUCER  ----------------------  *//
const initialState: CategoryBank = {
  bank: [],
  isLoading: false
};

export const categorySlice = createSlice({
  name: 'categoryBank',
  initialState,
  reducers: {
    /*  ------------------------  BANK  ------------------------  */
    set: (state, action: PayloadAction<Category[]>) => 
    {
      const tokens: Category[] = action.payload;
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
