import { createSelector } from 'reselect';
import { RootState } from '../../../../store';

const getSliderState = (state: RootState) => state.carousel;

export const getConfiguration = createSelector(
  getSliderState,
  (state) => {
    return {
      translate: state.translate,
      transition: state.transition,
      getWidth: state.width,
    }
  }
)