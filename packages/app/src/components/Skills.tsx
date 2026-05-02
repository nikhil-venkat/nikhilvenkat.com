import React, { useContext } from 'react';
import { getProfileData } from 'shared'
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../store/ThemeStore';

const Skills = function () {
  const { t } = useTranslation();
  const profileData = getProfileData() as any;
  const theme = useContext(ThemeContext);
  const isDarkMode = theme.classes.includes('dark-mode');

  const skillsCategories = [
    { title: 'AI Tools', skills: (profileData && profileData.skills && profileData.skills.ai_tools) || [] },
    { title: 'Front End', skills: (profileData && profileData.skills && profileData.skills.frontend) || [] },
    { title: 'Backend', skills: (profileData && profileData.skills && profileData.skills.backend) || [] },
    { title: 'Databases', skills: (profileData && profileData.skills && profileData.skills.databases) || [] }
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
                <div
                  key={index}
                  className="p-4 rounded-lg border-l-4 border-blue-500"
                  style={{ background: isDarkMode ? 'rgba(255,255,255,0.06)' : '#f9fafb' }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.studyType} in {edu.area}</h4>
                      <p style={{ opacity: 0.6 }}>{edu.institution}</p>
                    </div>
                    <div className="text-sm text-right" style={{ opacity: 0.5 }}>
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
                  <h4
                    className="font-semibold text-lg mb-3"
                    style={{ opacity: isDarkMode ? 0.7 : 1, color: isDarkMode ? 'inherit' : '#374151' }}
                  >
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, skillIndex: number) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium transition-colors"
                        style={{
                          background: isDarkMode ? 'rgba(255,255,255,0.1)' : '#f3f4f6',
                          color: isDarkMode ? 'rgba(255,255,255,0.85)' : '#1f2937',
                        }}
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
