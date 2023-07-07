import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navBackground: 'transparent',
  isNavVisible: false,
  currentPath: '',
  expand: true,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setNavBackground(state, action) {
      state.navBackground = action.payload;
    },
    toggleNavVisible(state) {
      state.isNavVisible = !state.isNavVisible;
    },
    setCurrentPath(state, action) {
      state.currentPath = action.payload;
    },
    setExpand(state, action) {
      state.expand = action.payload;
    },
  },
});

export const { setNavBackground, toggleNavVisible, setCurrentPath, setExpand } = headerSlice.actions;

export default headerSlice.reducer;
