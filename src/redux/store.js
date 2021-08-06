import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './mealsReducer';

export default configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
