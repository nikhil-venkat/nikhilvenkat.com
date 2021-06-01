import React, { Suspense } from 'react';
import Spinner from './Spinner';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Doggo from './Doggo';

const Page = function () {  
  return (
    <Suspense fallback={<Spinner/>}>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Doggo></Doggo>
    </Suspense>
  );
}

export default Page;
