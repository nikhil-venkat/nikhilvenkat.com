import React, {useState, Suspense} from 'react';
import './App.css';
import Spinner from './components/Spinner';

const Page = React.lazy(() =>  import('./components/Page'));

const App = function () {
  const [isLightModeOn, setisLightModeOn] = useState(true);
  const toggleMode = () => {
    setisLightModeOn(!isLightModeOn);
  }
  return (
    <div className={isLightModeOn ? 'App': 'App dark-mode bg-black text-white'}>
      <button className={isLightModeOn? 'mode-toggle ': 'mode-toggle invisible'} onClick={toggleMode} > &#x263E; </button>
      <button className={!isLightModeOn? 'mode-toggle ': 'mode-toggle invisible'} onClick={toggleMode} > &#x2600; </button>
      <div>
        <Suspense fallback={<Spinner/>}>
        <Page></Page>
        </Suspense>
      </div>
    </div>
  )
}

export default App;



