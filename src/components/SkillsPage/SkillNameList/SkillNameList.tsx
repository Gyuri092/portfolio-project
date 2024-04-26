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

  const detailText = useMemo(() => {
    return {
      when: contentsJson.when.find(
        (whenElem) => whenElem.skill === clickedSkill,
      ),
      why: contentsJson.why.find((whyElem) => whyElem.skill === clickedSkill),
    };
  }, [clickedSkill]);

  const skillNameButton = exceptionSkills.includes(skillName)
    ? exceptionSkills.map(
        (exceptionSkillElem) =>
          skillName === exceptionSkillElem && (
            <button
              key={`btn-${skillName}`}
              className={`${keyName} ${clickedSkill === exceptionSkillElem && 'clicked-button'}`}
              type="button"
              onClick={() => {
                if (keyName === 'Tools') return;
                if (clickedSkill === skillName) {
                  setClickedSkill('');
                } else {
                  setClickedSkill(skillName);
                }
              }}
            >
              {skillName}
            </button>
          ),
      )
    : skillName.split(', ').map((eachSkillName, eachSkillNameIndex) => (
        <button
          key={`btn-${eachSkillName}`}
          className={`${keyName} ${clickedSkill === eachSkillName && 'clicked-button'}`}
          type="button"
          onClick={() => {
            if (keyName === 'Tools') return;
            if (clickedSkill === eachSkillName) {
              setClickedSkill('');
            } else {
              setClickedSkill(eachSkillName);
            }
          }}
        >
          {`${eachSkillName}${eachSkillNameIndex !== skillName.split(',').length - 1 ? ',' : ''}`}
        </button>
      ));

  const skillDetail = exceptionSkills.includes(skillName)
    ? exceptionSkills.map(
        (exceptionSkillElem) =>
          clickedSkill === exceptionSkillElem && (
            <div key={`div-${exceptionSkillElem}`} className="contents-detail">
              <p>When?</p>
              <p>{detailText.when?.content}</p>
              <p>Why?</p>
              <p>{detailText.why?.content}</p>
            </div>
          ),
      )
    : skillName.split(', ').map(
        (eachSkillName) =>
          clickedSkill === eachSkillName && (
            <div key={`div-${eachSkillName}`} className="contents-detail">
              <p>When?</p>
              <p>{detailText.when?.content}</p>
              <p>Why?</p>
              <p>{detailText.why?.content}</p>
            </div>
          ),
      );

  return (
    <li className="skills-page-list-contents">
      {skillNameButton}
      {skillDetail}
    </li>
  );
};
