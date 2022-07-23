import { createReducer } from '@reduxjs/toolkit';
import {
  updateModalState,
  setOpenedContact,
  resetOpenedContact,
} from './modalActions';

const initialState = {
  isModalShown: false,
  openedContact: null,
};

export const modalReducer = createReducer(initialState, {
  [updateModalState]: (state, _) => {
    return { ...state, isModalShown: !state.isModalShown };
  },

  [setOpenedContact]: (state, { payload }) => {
    return { ...state, openedContact: payload };
  },

  [resetOpenedContact]: (state, _) => {
    return { ...state, openedContact: null };
  },
});
