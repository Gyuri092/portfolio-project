import { clickedSkillsState, showSkillsDetailState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useEffect, useMemo } from 'react';
import { useRecoilState } from 'recoil';

const skillsOject = {
  'Front-End':
    'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components\nEmotion, SaSS',
  Database: 'Oracle, MS-SQL',
  Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
};

const exceptionSkills = 'HTML, CSS, JavaScript, TypeScript, Oracle, MS-SQL';

export default function SkillNameList() {
  const [clickedSkills, setClickedSkills] = useRecoilState(clickedSkillsState);
  const [, setShowSkillsDetail] = useRecoilState(showSkillsDetailState);
  const isClickedSkillsEmpty = useMemo(
    () => clickedSkills.length === 0,
    [clickedSkills],
  );
  useEffect(() => {
    setShowSkillsDetail(!isClickedSkillsEmpty);
  }, [isClickedSkillsEmpty, setShowSkillsDetail]);

  const renderButton = (key: string, name: string, index: number) => {
    return (
      <button
        key={`btn-${name}`}
        className={`skills-button ${key} ${clickedSkills.includes(name) && 'clicked-button'} ${index !== 0 && 'margin-left'}`}
        type="button"
        onClick={() => {
          if (key === 'Tools') return;
          setClickedSkills((prev) => {
            const updatedSkills = prev.includes(name)
              ? prev.filter((v) => v !== name)
              : [...prev, name];
            return updatedSkills;
          });
        }}
      >
        {name}
      </button>
    );
  };

  return Object.entries(skillsOject).map(([key, value]) => {
    return (
      <div key={key} className="skills-list-box">
        <p className="subtitle">{key}</p>
        <ul>
          {value.split('\n').map((skillName) => (
            <li key={skillName} className="skills-page-list-contents">
              {exceptionSkills.includes(skillName)
                ? renderButton(key, skillName, 0)
                : skillName.split(', ').map((elem, index) => {
                    const buttonName = exceptionSkills
                      .split(', ')
                      .includes(elem)
                      ? skillName
                      : `${elem}${index !== skillName.split(',').length - 1 ? ',' : ''}`;

                    return renderButton(key, buttonName, index);
                  })}
            </li>
          ))}
        </ul>
      </div>
    );
  });
}
