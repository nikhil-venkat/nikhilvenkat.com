import React from 'react';
import { getProfileData } from 'shared'
import { useTranslation } from 'react-i18next';

const Skills = function () {
  const { t } = useTranslation();
  const profileData = getProfileData();
  
  // Transform the skills data into a renderable format with fallbacks
  const skillsCategories = [
    { title: 'Backend', skills: (profileData && profileData.skills && profileData.skills.backend) || [] },
    { title: 'Databases', skills: (profileData && profileData.skills && profileData.skills.databases) || [] },
    { title: 'Frontend', skills: (profileData && profileData.skills && profileData.skills.frontend) || [] },
    { title: 'Other', skills: (profileData && profileData.skills && profileData.skills.other) || [] },
    { title: 'Tools & DevOps', skills: (profileData && profileData.skills && profileData.skills.tools_devops) || [] }
  ];

  const education = (profileData && profileData.education) || [];

  return (
    <div className="flex">
      <div className="w-screen">
        <div className="px-20">
          <h2 className="font-bold text-2xl mb-8">{t('section_skills')}</h2>
          
          {/* Education Section */}
          <div className="mb-12">
            <h3 className="font-semibold text-xl mb-4 text-blue-600">Education</h3>
            <div className="space-y-4">
              {education.map((edu: any, index: number) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{edu.studyType} in {edu.area}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-gray-500 text-right">
                      <div>{edu.start} - {edu.end}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-blue-600">Technical Skills</h3>
            <div className="space-y-6">
              {skillsCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h4 className="font-semibold text-lg mb-3 text-gray-700">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;




