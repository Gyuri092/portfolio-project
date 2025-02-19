import { SkillsKeyType, SkillsType } from '@/types/types';
import skillsDetail from '../data/contents.json';

interface Props {
  skillList: SkillsType;
  currentTab: SkillsKeyType;
  flippedCards: string[];
  toggleCard: (item: string) => void;
}

export const SkillsCardTable = (props: Props) => {
  const { skillList, currentTab, flippedCards, toggleCard } = props;
  return (
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
                  skillsDetail.when.find((when) => when.skill === item)?.content
                }\nWhy:\n${
                  skillsDetail.why.find((why) => why.skill === item)?.content
                }`}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
