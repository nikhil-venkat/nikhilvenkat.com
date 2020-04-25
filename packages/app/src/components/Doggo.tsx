import React, {useState, useEffect} from 'react';
import { APIS, fetch } from 'shared';

const Doggo = function () {
  const [dogImg, setDogImg] = useState();

  const getRandomDog = () => {
    const result = fetch({
      url: APIS.DOGGO,
      responseLookupKey: 'url'
    });
    result.pageData.then((dogImg) => {
      setDogImg(dogImg);
    });
  }
  useEffect(() => {
    getRandomDog();
  },[]);

  return (
    <div className="flex mt-40 mb-10">
      <div className="w-screen">
        <div className="px-20">
          <p className="py-10"> Thanks &#x1F64C; for visiting. </p>
          <img title="Click to see a random &#x1F436; photo"className="dog w-1/2 cursor-pointer" alt="good boy" src={dogImg} onClick={(e) => { e.preventDefault(); getRandomDog()}}></img>
        </div>
      </div>
    </div>
  );
}

export default Doggo;




