import { showSkillsDetailState, showSkillsModalState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

const skillsOject = {
  'Front-End':
    'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components\nEmotion, SaSS',
  Database: 'Oracle, MS-SQL',
  Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
};

const exceptionSkills = [
  'HTML, CSS',
  'JavaScript, TypeScript',
  'Oracle, MS-SQL',
];

export default function SkillNameList() {
  const [clickedSkills, setClickedSkills] = useState<string[]>([]);
  const [, setShowSkillsModal] = useRecoilState(showSkillsModalState);
  const [, setShowSkillsDetail] = useRecoilState(showSkillsDetailState);
  // const detailText = useMemo(() => {
  //   return {
  //     when: contentsJson.when.find(
  //       (whenElem) => whenElem.skill === clickedSkill,
  //     ),
  //     why: contentsJson.why.find((whyElem) => whyElem.skill === clickedSkill),
  //   };
  // }, [clickedSkill]);
  const isClickedSkillsEmpty = useMemo(
    () => clickedSkills.length === 0,
    [clickedSkills],
  );

  useEffect(() => {
    setShowSkillsDetail(!isClickedSkillsEmpty);
  }, [isClickedSkillsEmpty, setShowSkillsDetail]);

  return Object.entries(skillsOject).map(([key, value]) => {
    return (
      <div key={key} className="skills-list-box">
        <p className="subtitle">{key}</p>
        <ul>
          {value.split('\n').map((skillName) => (
            <li key={skillName} className="skills-page-list-contents">
              {skillName.split(', ').map((elem, index) => {
                const buttonName = exceptionSkills.includes(elem)
                  ? elem
                  : `${elem}${index !== skillName.split(',').length - 1 ? ',' : ''}`;

                return (
                  <button
                    key={`btn-${buttonName}`}
                    className={`skills-button ${key} ${clickedSkills.includes(elem) && 'clicked-button'} ${index !== 0 && 'margin-left'}`}
                    type="button"
                    onClick={() => {
                      if (key === 'Tools') return;
                      setClickedSkills((prev) => {
                        const updatedSkills = prev.includes(elem)
                          ? prev.filter((v) => v !== elem)
                          : [...prev, elem];
                        return updatedSkills;
                      });
                    }}
                  >
                    {buttonName}
                  </button>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    );
  });
}
