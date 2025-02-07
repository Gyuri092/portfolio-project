import { showSkillsModalState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import SkillsModal from '../Modal/SkillsModal';
import SkillNameList from './SkillNameList/SkillNameList';

const skillsOject = {
  'Front-End':
    'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components\nEmotion, SaSS',
  Database: 'Oracle, MS-SQL',
  Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
};

export default function SkillsPage() {
  const showSkillsModal = useRecoilValue(showSkillsModalState);
  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="page-contents">
        {Object.entries(skillsOject).map(([key, value]) => {
          return (
            <div key={key} className="skills-list-box">
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
      {showSkillsModal && createPortal(<SkillsModal />, document.body)}
    </div>
  );
}
