import { clickedSkillsState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useRecoilValue } from 'recoil';
import contentsJson from '../data/contents.json';

export const SkillsDetail = () => {
  const clickedSkills = useRecoilValue(clickedSkillsState);
  const detailText = (skill: string) => {
    const when = contentsJson.when.find((whenElem) => whenElem.skill === skill);
    const why = contentsJson.why.find((whyElem) => whyElem.skill === skill);
    if (!when || !why) return '';
    return `when: ${when.content}\nwhy: ${why.content}`;
  };
  return (
    <div className="skills-detail">
      {clickedSkills.map((skill) => {
        return (
          <div key={skill} className="skills-detail-text">
            {detailText(skill)}
          </div>
        );
      })}
    </div>
  );
};
