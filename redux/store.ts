import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import headerReducer from './slices/headerSlice';

const makeStore = () => configureStore({ reducer: { header: headerReducer } });

export const wrapper = createWrapper(makeStore);
