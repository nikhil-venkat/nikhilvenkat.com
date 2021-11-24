import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Spinner from './components/Spinner';
import { getTheme } from './reducers/themeReducer';

const Page = React.lazy(() =>  import('./components/Page'));

const App = function () {
  const isDarkMode = useSelector(getTheme);
  const dispatch = useDispatch();
  const toggleTheme = (mode: string) => {
    dispatch({ type: mode });
  }
  return (
    <div className={isDarkMode ? 'App dark-mode bg-black text-white': 'App'}>
      <button className={isDarkMode? 'mode-toggle ': 'mode-toggle invisible'} onClick={() => toggleTheme('lightmode')} > &#x263E; </button>
      <button className={!isDarkMode? 'mode-toggle ': 'mode-toggle invisible'} onClick={() => toggleTheme('darkmode')} > &#x2600; </button>
      <div>
        <Suspense fallback={<Spinner/>}>
          <Page></Page>
        </Suspense>
      </div>
    </div>
  )
}

export default App;



