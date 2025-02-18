import '@/styles/skillspage.scss';
import { SkillsTab } from './SkillsTab/SkillsTab';

export default function SkillsPage() {
  return (
    <div className="page-container">
      <div className="page-title">Skills</div>
      <div className="skills-page-contents">
        <SkillsTab />
      </div>
    </div>
  );
}
