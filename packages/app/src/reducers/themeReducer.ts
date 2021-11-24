import { Theme ,defaultTheme, AppState } from '../types';

export function themeReducer( state:Theme = defaultTheme, action: any) {
  if (action.type === 'darkmode') {
    return { ...state, darkMode: true }
  } else if (action.type === 'lightmode') {
    return { ...state, darkMode: false }
  } else {
    return state;
  }
}

// selectors
export const getTheme = (state: AppState) => {
  return state.theme.darkMode;
}
