import '@/styles/skillspage.scss';
import SkillNameList from './SkillNameList/SkillNameList';

export default function SkillsPage() {
  const skillsOject = {
    'Front-End':
      'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components, Emotion',
    Database: 'Oracle, MS-SQL',
    Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
  };

  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="skills-page-contents">
        {Object.entries(skillsOject).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="subtitle">{key}</p>
              <ul>
                {value.split('\n').map((skillName) => (
                  <SkillNameList
                    key={skillName}
                    skillName={skillName}
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
}
