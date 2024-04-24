import contentsJson from '@/components/SkillsPage/data/contents.json';
import '@/styles/skillspage.scss';
import { useMemo, useState } from 'react';

interface Props {
  skillName: string;
  skillNameIndex: number;
  keyName: string;
}

export const SkillNameList = (props: Props) => {
  const [clickedSkill, setClickedSkill] = useState('');
  const { skillName, skillNameIndex, keyName } = props;

  const exceptionSkills = [
    'HTML, CSS',
    'JavaScript, TypeScript',
    'Oracle, MS-SQL',
  ];
  const whenTextArray = contentsJson.when;
  const whyTextArray = contentsJson.why;

  const whenText = useMemo(() => {
    return whenTextArray.find((whenElem) => whenElem.skill === clickedSkill);
  }, [clickedSkill, whenTextArray]);
  const whyText = useMemo(() => {
    return whyTextArray.find((whyElem) => whyElem.skill === clickedSkill);
  }, [clickedSkill, whyTextArray]);

  return (
    <li className="contents">
      {skillName.split(', ').map((eachSkillName, eachSkillNameIndex) => (
        <button
          key={eachSkillName}
          className={keyName}
          type="button"
          onClick={() => keyName !== 'Tools' && setClickedSkill(eachSkillName)}
        >
          {`${eachSkillName}${eachSkillNameIndex !== skillName.split(',').length - 1 ? ',' : ''}`}
        </button>
      ))}
      {skillName.split(', ').map(
        (eachSkillName) =>
          clickedSkill === eachSkillName && (
            <div key={eachSkillName} className="contents-detail">
              <p>When?</p>
              <p>{whenText?.content}</p>
              <p>Why?</p>
              <p>{whyText?.content}</p>
            </div>
          ),
      )}
    </li>
  );
};
