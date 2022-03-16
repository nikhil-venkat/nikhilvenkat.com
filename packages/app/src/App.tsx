import React, { Suspense, useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import { ThemeContext, themes, ThemeType } from "./store/ThemeStore";

const Page = React.lazy(() =>  import('./components/Page'));

const App = function () {
  const toggleTheme = (mode: string) => {
    if (mode === 'lightmode') {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }
  // set default to light
  const [theme, setTheme] = useState<ThemeType>(themes.light);
  const isDarkMode = theme.classes.includes('dark-mode');
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.classes}>
        <button className={isDarkMode? 'mode-toggle': 'invisible'} onClick={() => toggleTheme('lightmode')} > &#x2600; </button>
        <button className={!isDarkMode? 'mode-toggle': 'invisible'} onClick={() => toggleTheme('darkmode')} > &#x263E; </button>
        <div>
          <Suspense fallback={<Spinner/>}>
            <Page></Page>
          </Suspense>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;



