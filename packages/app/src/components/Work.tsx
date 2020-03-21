import React from 'react';
import { APIS, fetchResourcePromise } from 'shared'

const workResource = fetchResourcePromise({
  url: APIS.WORK_API,
  responseLookupKey: 'pageData.content' 
});
const about = function () {
  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20 py-10">
        <p className="font-bold text-xl">Work Experience</p>
        <ul>{
            workResource.pageData.read().map((value: any, index: any) => {
            return <li key={index} className="mb-5"> 
              <p className="text-lg">{value.title}: <a href={value.url} target="_blank" rel="noopener noreferrer">{value.company}</a> {value.period}</p>
              <p>{value.summary}</p>
            </li>
            })
            }</ul>  
        </div>
      </div>
    </div>
  );
}

export default about;




