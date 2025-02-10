import { showSkillsDetailState, showSkillsModalState } from '@/recoil/atoms';
import '@/styles/skillspage.scss';
import { useRecoilValue } from 'recoil';
import SkillNameList from './SkillNameList/SkillNameList';

export default function SkillsPage() {
  const showSkillsModal = useRecoilValue(showSkillsModalState);
  const showSkillsDetail = useRecoilValue(showSkillsDetailState);
  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="page-contents">
        <SkillNameList />
      </div>
      {showSkillsDetail && (
        <div className="page-contents">여기싹 나타났다가 싹 사라졌다가~</div>
      )}
    </div>
  );
}
