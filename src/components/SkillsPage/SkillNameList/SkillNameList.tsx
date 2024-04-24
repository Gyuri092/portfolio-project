import contentsJson from '@/components/SkillsPage/data/contents.json';
import '@/styles/skillspage.scss';
import { useMemo, useState } from 'react';

interface Props {
  skillName: string;
  keyName: string;
}

export const SkillNameList = (props: Props) => {
  const [clickedSkill, setClickedSkill] = useState('');
  const { skillName, keyName } = props;

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

  const generalSkillButton = skillName
    .split(', ')
    .map((eachSkillName, eachSkillNameIndex) => (
      <button
        key={eachSkillName}
        className={keyName}
        type="button"
        onClick={() => keyName !== 'Tools' && setClickedSkill(eachSkillName)}
      >
        {`${eachSkillName}${eachSkillNameIndex !== skillName.split(',').length - 1 ? ',' : ''}`}
      </button>
    ));

  const exceptionSkillButton = exceptionSkills.map(
    (exceptionSkillElem) =>
      skillName === exceptionSkillElem && (
        <button
          key={skillName}
          className={keyName}
          type="button"
          onClick={() => keyName !== 'Tools' && setClickedSkill(skillName)}
        >
          {skillName}
        </button>
      ),
  );

  const generalSkillDetail = skillName.split(', ').map(
    (eachSkillName) =>
      clickedSkill === eachSkillName && (
        <div key={eachSkillName} className="contents-detail">
          <p>When?</p>
          <p>{whenText?.content}</p>
          <p>Why?</p>
          <p>{whyText?.content}</p>
        </div>
      ),
  );

  const exceptionSkillDetail = exceptionSkills.map(
    (exceptionSkillElem) =>
      clickedSkill === exceptionSkillElem && (
        <div key={exceptionSkillElem} className="contents-detail">
          <p>When?</p>
          <p>{whenText?.content}</p>
          <p>Why?</p>
          <p>{whyText?.content}</p>
        </div>
      ),
  );

  return (
    <li className="contents">
      {exceptionSkills.includes(skillName)
        ? exceptionSkillButton
        : generalSkillButton}
      {exceptionSkills.includes(skillName)
        ? exceptionSkillDetail
        : generalSkillDetail}
    </li>
  );
};
