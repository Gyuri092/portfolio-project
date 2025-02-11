import { showSkillsDetailState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useRecoilValue } from 'recoil';
import SkillNameList from './SkillNameList/SkillNameList';
import { SkillsDetail } from './SkillsDetail/SkillsDetail';

export default function SkillsPage() {
  const showSkillsDetail = useRecoilValue(showSkillsDetailState);
  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="page-contents">
        <SkillNameList />
      </div>
      {showSkillsDetail && <SkillsDetail />}
    </div>
  );
}
