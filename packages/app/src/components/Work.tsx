import React from 'react';
import { getProfileData } from 'shared'
import { useTranslation } from 'react-i18next';

const Work = function () {
  const { t } = useTranslation();
  const profileData = getProfileData();
  const experience = (profileData && profileData.experience) || [];

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Present';
    return new Date(dateStr + '-01').toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20 py-10">
          <h2 className="font-bold text-2xl mb-8">{t('section_work')}</h2>
          <div className="space-y-8">
            {experience.map((company: any, companyIndex: number) => (
              <div key={companyIndex} className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{company.company}</h3>
                    <p className="text-gray-600">{company.location}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {company.positions.map((position: any, positionIndex: number) => (
                    <div key={positionIndex} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{position.title}</h4>
                        <div className="text-sm text-gray-500 text-right">
                          <div>{formatDate(position.start)} - {formatDate(position.end)}</div>
                        </div>
                      </div>
                      
                      {position.highlights && (
                        <ul className="space-y-2">
                          {position.highlights.map((highlight: string, highlightIndex: number) => (
                            <li key={highlightIndex} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-1">•</span>
                              <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;




