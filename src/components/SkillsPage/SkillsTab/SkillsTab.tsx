import { SkillsType } from '@/types/types';
import { useState } from 'react';
import skills from '../data/skills.json';
import { SkillsCardTable } from '../SkillsCardTable/SkillsCardTable';
import { SkillsTabName } from '../SkillsTabName/SkillsTabName';

export const SkillsTab = () => {
  const skillList: SkillsType = skills;
  const [currentTab, setCurrentTab] = useState<keyof SkillsType>('Front-End');
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const toggleCard = (item: string) => {
    setFlippedCards((prev) =>
      prev.includes(item)
        ? prev.filter((card) => card !== item)
        : [...prev, item],
    );
  };

  const updateCurrentTab = (key: keyof SkillsType) => setCurrentTab(key);
  const updateFlippedCards = () =>
    setFlippedCards((prev) =>
      prev.length === skillList[currentTab].split('\n').length
        ? []
        : skillList[currentTab].split('\n'),
    );
  return (
    <div>
      <SkillsTabName
        skillList={skillList}
        currentTab={currentTab}
        updateCurrentTab={updateCurrentTab}
        updateFlippedCards={updateFlippedCards}
      />
      <SkillsCardTable
        skillList={skillList}
        currentTab={currentTab}
        flippedCards={flippedCards}
        toggleCard={toggleCard}
      />
    </div>
  );
};
