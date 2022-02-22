import React from 'react';
import { APIS, fetchResourcePromise } from 'shared'
import { useTranslation } from 'react-i18next';

const workResource = fetchResourcePromise({
  url: APIS.WORK_API,
  responseLookupKey: 'work' 
});
const Work = function () {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20 py-10">
        <p className="font-bold text-xl">{t('section_work')}</p>
        <ul>{
            workResource.pageData.read().map((value: any, index: any) => {
            return <li key={index} className="mb-5"> 
              <p className="text-lg font-bold">{value.title} @ <a href={value.url} target="_blank" rel="noopener noreferrer">{value.company}</a></p>
              <span className="text-md font-bold"> {value.period} </span>
              <p>{value.summary}</p>
            </li>
            })
            }</ul>  
        </div>
      </div>
    </div>
  );
}

export default Work;




