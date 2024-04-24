import '@/styles/skillspage.scss';
import { SkillNameList } from './SkillNameList/SkillNameList';

export const SkillsPage = () => {
  const skillsOject = {
    'Front-End':
      'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components, Emotion',
    Database: 'Oracle, MS-SQL',
    Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
  };

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
                  <SkillNameList
                    key={skillName}
                    skillName={skillName}
                    skillNameIndex={skillNameIndex}
                    keyName={key}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
