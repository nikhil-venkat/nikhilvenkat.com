import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';

const Doggo = function () {
  const [dogImg, setDogImg] = useState();
  const { t, i18n } = useTranslation();

  const getRandomDog = () => {
    // Dog fetching functionality removed - component is not being used
    console.log('Dog fetching functionality removed');
  }
  useEffect(() => {
    //getRandomDog();
  },[]);

  return (
    <div className="flex mt-10 mb-10">
      <div className="w-screen">
        <div className="px-20">
          <p className="py-10">{t('footer')}</p>
          {/* <img title="Click to see a random &#x1F436; photo"className="dog w-1/2 cursor-pointer" alt="good boy" src={dogImg} onClick={(e) => { e.preventDefault(); getRandomDog()}}></img>  */}
        </div>
      </div>
    </div>
  );
}

export default Doggo;




