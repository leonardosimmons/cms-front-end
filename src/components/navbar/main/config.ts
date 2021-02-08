import { createSelector } from 'reselect';
import { RootState } from '../../../store';

const getCategories = (state: RootState) => state.categories || '';

export const getConfiguration = createSelector(
  getCategories,
  (state) => {
    return{
      categories: state.bank,
      isLoading: state.isLoading
    }
  }
)
