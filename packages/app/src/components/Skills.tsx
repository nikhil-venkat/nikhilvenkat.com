import React from 'react';
import { APIS, fetchResourcePromise } from 'shared'

const resumeResource = fetchResourcePromise({
  url: APIS.RESUME_API,
  responseLookupKey: 'pageData.content' 
});

const resume = function () {
  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20">
        <p className="font-bold text-xl">Skills</p>
          <ul>{
            resumeResource.pageData.read().map((value: any, index: any) => {
              return <li className="mb-5" key={index}> {value.title}: {value.skills}</li>
            })
            }</ul>  
        </div>
      </div>
    </div>
  );
}

export default resume;




