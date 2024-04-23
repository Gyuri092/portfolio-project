import contentsJson from '@/components/SkillsPage/data/contents.json';
import '@/styles/skillspage.scss';
import { useMemo, useState } from 'react';

export const SkillsPage = () => {
  const [clickedSkill, setClickedSkill] = useState('');
  const skillsOject = {
    'Front-End':
      'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components, Emotion',
    Database: 'Oracle, MS-SQL',
    Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
  };

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
    <div className="skills-page-container">
      <div className="skills-page-title">Skills</div>
      <div className="skills-page-contents">
        {Object.entries(skillsOject).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="subtitle">{key}</p>
              <ul>
                {value.split('\n').map((skillName, skillNameIndex) => (
                  <li className="contents" key={skillName}>
                    {skillName
                      .split(', ')
                      .map((eachSkillName, eachSkillNameIndex) => {
                        if (exceptionSkills[skillNameIndex] === skillName) {
                          return (
                            <button
                              key={eachSkillName}
                              className={key}
                              type="button"
                              onClick={() =>
                                key !== 'Tools' &&
                                setClickedSkill(
                                  exceptionSkills[skillNameIndex] ?? '',
                                )
                              }
                            >
                              {`${exceptionSkills[skillNameIndex]}${eachSkillNameIndex !== skillName.split(',').length - 1 ? ',' : ''}`}
                            </button>
                          );
                        }
                        return (
                          <button
                            key={eachSkillName}
                            className={key}
                            type="button"
                            onClick={() =>
                              key !== 'Tools' && setClickedSkill(eachSkillName)
                            }
                          >
                            {`${eachSkillName}${eachSkillNameIndex !== skillName.split(',').length - 1 ? ',' : ''}`}
                          </button>
                        );
                      })}
                    {skillName.split(', ').map((eachSkillName) => {
                      if (exceptionSkills[skillNameIndex] === skillName) {
                        return (
                          clickedSkill === skillName && (
                            <div
                              key={eachSkillName}
                              className="contents-detail"
                            >
                              <p>When?</p>
                              <p>{whenText?.content}</p>
                              <p>Why?</p>
                              <p>{whyText?.content}</p>
                            </div>
                          )
                        );
                      }
                      return (
                        clickedSkill === eachSkillName && (
                          <div key={eachSkillName} className="contents-detail">
                            <p>When?</p>
                            <p>{whenText?.content}</p>
                            <p>Why?</p>
                            <p>{whyText?.content}</p>
                          </div>
                        )
                      );
                    })}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
