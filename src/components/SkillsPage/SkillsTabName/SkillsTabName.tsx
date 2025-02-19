import FlipIcon from '@/icons/flip_royalPurple.svg';
import DarkmodeFlipIcon from '@/icons/flip_white.svg';
import { darkModeState } from '@/recoil/atoms';
import { SkillsKeyType, SkillsType } from '@/types/types';
import { useRecoilValue } from 'recoil';

interface Props {
  skillList: SkillsType;
  currentTab: SkillsKeyType;
  updateCurrentTab: (prop: SkillsKeyType) => void;
  updateFlippedCards: () => void;
}

export const SkillsTabName = (props: Props) => {
  const { skillList, currentTab, updateCurrentTab, updateFlippedCards } = props;
  const darkMode = useRecoilValue(darkModeState);

  return (
    <div className="skliis-page-tab">
      <div>
        {(Object.keys(skillList) as SkillsKeyType[]).map((key) => (
          <button
            type="button"
            key={key}
            className={`skills-page-tab-name ${key === currentTab && 'currentTab'}`}
            onClick={() => updateCurrentTab(key)}
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
            updateFlippedCards()
          }
        >
          {darkMode ? <DarkmodeFlipIcon /> : <FlipIcon />}
        </button>
      </div>
    </div>
  );
};
