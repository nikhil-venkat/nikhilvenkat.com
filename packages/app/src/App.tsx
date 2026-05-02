import React, { Suspense, useState } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import LocationWidget from './components/LocationWidget';
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
  const [theme, setTheme] = useState<ThemeType>(themes.light);
  const isDarkMode = theme.classes.includes('dark-mode');

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.classes}>
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '10px 80px',
            borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)',
            background: isDarkMode ? 'rgba(0,0,0,0.92)' : 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <LocationWidget />
          <button
            className={isDarkMode ? 'mode-toggle-header' : 'mode-toggle-header'}
            onClick={() => toggleTheme(isDarkMode ? 'lightmode' : 'darkmode')}
            style={{ marginLeft: 20, background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5, fontSize: 16 }}
            aria-label="Toggle theme"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ display: 'block' }}>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 2a10 10 0 0 1 0 20V2z" fill="currentColor" />
            </svg>
          </button>
        </header>
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
