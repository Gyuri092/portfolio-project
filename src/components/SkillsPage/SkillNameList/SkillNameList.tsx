import contentsJson from '@/components/SkillsPage/data/contents.json';
import '@/styles/skillspage.scss';
import { useMemo, useState } from 'react';

interface Props {
  skillName: string;
  keyName: string;
}

const exceptionSkills = [
  'HTML, CSS',
  'JavaScript, TypeScript',
  'Oracle, MS-SQL',
];

export default function SkillNameList(props: Props) {
  const [clickedSkill, setClickedSkill] = useState('');
  const { skillName, keyName } = props;
  const skillDetailArray = useMemo(
    () =>
      exceptionSkills.includes(skillName) ? [skillName] : skillName.split(', '),
    [skillName],
  );
  const detailText = useMemo(() => {
    return {
      when: contentsJson.when.find(
        (whenElem) => whenElem.skill === clickedSkill,
      ),
      why: contentsJson.why.find((whyElem) => whyElem.skill === clickedSkill),
    };
  }, [clickedSkill]);

  return (
    <li className="skills-page-list-contents">
      {skillDetailArray.map((elem, index) => {
        const buttonName = exceptionSkills.includes(elem)
          ? elem
          : `${elem}${index !== skillName.split(',').length - 1 ? ',' : ''}`;

        return (
          <button
            key={`btn-${buttonName}`}
            className={`skills-button ${keyName} ${clickedSkill === elem && 'clicked-button'} ${index !== 0 && 'margin-left'}`}
            type="button"
            onClick={() => {
              if (keyName === 'Tools') return;
              setClickedSkill(clickedSkill === elem ? '' : elem);
            }}
          >
            {buttonName}
          </button>
        );
      })}
      {skillDetailArray.map(
        (elem) =>
          clickedSkill === elem && (
            <div key={`div-${elem}`} className="contents-detail">
              <p>When?</p>
              <p>{detailText.when?.content}</p>
              <p>Why?</p>
              <p>{detailText.why?.content}</p>
            </div>
          ),
      )}
    </li>
  );
}
