import React from 'react';
import parse from 'html-react-parser';
import { APIS, greetUser, fetchResourcePromise } from 'shared'

const aboutResource = fetchResourcePromise({
  url: APIS.ABOUT_API,
  responseLookupKey: 'pageData.about' 
});

const About = function () {
  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20 py-10">
          <p className="font-bold text-xl">{greetUser({greeting: 'Hello' , name: ''})} &#x1F44B; I am Nikhil!</p>
          <p className="text-xl mb-5">Welcome to my personal webspace.</p>
          <p className="font-bold text-xl">About Me</p>
          <p className="text-base">{parse(aboutResource.pageData.read())}</p>
        </div>
      </div>
    </div>
  );
}

export default About;




