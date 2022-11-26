import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '@/types';

const localTheme = localStorage.getItem('theme') as Theme;

interface InitialState {
  theme: Theme;
}
const initialState: InitialState = {
  theme: localTheme ?? Theme.Light
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: InitialState) => {
      state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark;
      localStorage.setItem('theme', state.theme);
    }
  }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
