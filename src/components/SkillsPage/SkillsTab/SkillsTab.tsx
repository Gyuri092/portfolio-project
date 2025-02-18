import FlipIcon from '@/icons/flip_royalPurple.svg';
import DarkmodeFlipIcon from '@/icons/flip_white.svg';
import { darkModeState } from '@/recoil/atoms';
import { SkillsKeyType, SkillsType } from '@/types/types';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import skillsDetail from '../data/contents.json';
import skills from '../data/skills.json';

export const SkillsTab = () => {
  const skillList: SkillsType = skills;
  const [currentTab, setCurrentTab] = useState<keyof SkillsType>('Front-End');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const darkMode = useRecoilValue(darkModeState);

  const toggleCard = (item: string) => {
    setFlippedCards((prev) =>
      prev.includes(item)
        ? prev.filter((card) => card !== item)
        : [...prev, item],
    );
  };

  return (
    <div>
      <div className="skliis-page-tab">
        <div>
          {(Object.keys(skillList) as SkillsKeyType[]).map((key) => (
            <button
              type="button"
              key={key}
              className={`skills-page-tab-name ${key === currentTab && 'currentTab'}`}
              onClick={() => setCurrentTab(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <div className="skills-page-tab-divider">
          <button
            type="button"
            className="skills-page-all-flip-button clickable"
            onClick={() =>
              currentTab !== 'Tools' &&
              skillList[currentTab] &&
              setFlippedCards((prev) =>
                prev.length === skillList[currentTab].split('\n').length
                  ? []
                  : skillList[currentTab].split('\n'),
              )
            }
          >
            {darkMode ? <DarkmodeFlipIcon /> : <FlipIcon />}
          </button>
        </div>
      </div>
      <div className="skills-page-card-grid">
        {skillList[currentTab] &&
          skillList[currentTab].split('\n').map((item) => (
            <div
              key={item}
              className={`skills-page-card-container ${flippedCards.includes(item) ? 'flipped' : ''}`}
            >
              <div className="skills-page-card-inner">
                <button
                  type="button"
                  className={`skills-page-card front ${currentTab !== 'Tools' && 'clickable'}`}
                  onClick={() => currentTab !== 'Tools' && toggleCard(item)}
                >
                  {item}
                </button>
                <button
                  type="button"
                  className={`skills-page-card back ${currentTab !== 'Tools' && 'clickable'}`}
                  onClick={() => currentTab !== 'Tools' && toggleCard(item)}
                >
                  {`When:\n${
                    skillsDetail.when.find((when) => when.skill === item)
                      ?.content
                  }\nWhy:\n${
                    skillsDetail.why.find((why) => why.skill === item)?.content
                  }`}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
