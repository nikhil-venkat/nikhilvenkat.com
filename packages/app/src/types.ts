/*
  Theme 
*/
export type Theme = {
  'darkMode': boolean
};

export const defaultTheme =  {
  'darkMode': false
};

/*
  User 
*/
export type User = {
  name: string,
};

/*
  AppState 
*/
export type AppState = {
  'theme': {
    darkMode: boolean
  },
};
