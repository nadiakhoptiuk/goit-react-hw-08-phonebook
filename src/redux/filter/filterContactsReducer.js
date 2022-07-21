import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from './filterActions';

export const filterContactsReducer = createReducer('', {
  [updateFilter]: (_, { payload }) => {
    return payload;
  },
});
