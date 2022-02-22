import React from 'react';
import { APIS, fetchResourcePromise } from 'shared'
import { useTranslation } from 'react-i18next';

const resumeResource = fetchResourcePromise({
  url: APIS.RESUME_API,
  responseLookupKey: 'resume' 
});

const Skills = function () {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20">
        <p className="font-bold text-xl">{t('section_skills')}</p>
          <ul>{
            resumeResource.pageData.read().map((value: any, index: any) => {
              return <li className="mb-5" key={index}> <span className="font-bold">{value.title} :</span> {value.skills}</li>
            })
            }</ul>  
        </div>
      </div>
    </div>
  );
}

export default Skills;




