import { createAction } from '@reduxjs/toolkit';

export const updateModalState = createAction('modal/updateModalState');
export const setOpenedContact = createAction('modal/setOpenedContact');
export const resetOpenedContact = createAction('modal/resetOpenedContact');
