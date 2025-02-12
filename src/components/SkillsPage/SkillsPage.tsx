import { showSkillsDetailState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useRecoilValue } from 'recoil';
import { SkillsTab } from './SkillsTab/SkillsTab';

export default function SkillsPage() {
  const showSkillsDetail = useRecoilValue(showSkillsDetailState);
  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="skills-page-contents">
        {/* <SkillNameList /> */}
        <SkillsTab />
      </div>
      {/* {showSkillsDetail && <SkillsDetail />} */}
    </div>
  );
}
