import { SkillsType } from '@/types/types';
import { useState } from 'react';
import skills from '../data/skills.json';

export const SkillsTab = () => {
  const skillList: SkillsType = skills;
  const [currentTab, setCurrentTab] = useState('Front-End');
  return (
    <div>
      <div className="skliis-page-tab">
        <div>
          {Object.entries(skillList).map(([key]) => (
            <button
              type="button"
              key={key}
              className="skills-page-tab-name"
              onClick={() => {
                setCurrentTab(key);
              }}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="skills-page-tab-divider" />
      </div>
      <div className="skills-page-card-grid">
        {skillList[currentTab] &&
          skillList[currentTab]
            .split('\n')
            .map((item) => <div key={item}>{item}</div>)}
      </div>
    </div>
  );
};
