import CloseIcon from '@/icons/close.svg';
import { showSkillsModalState } from '@/recoil/atoms';
import '@/styles/modal.scss';
import { useRecoilState } from 'recoil';

export default function SkillsModal() {
  const [, setShowSkillsModal] = useRecoilState(showSkillsModalState);
  return (
    <div className="modal-background">
      <button
        className="modal-background-close-button"
        type="button"
        onClick={() => setShowSkillsModal((prev) => !prev)}
      />
      <div className="modal-container medium">
        <div className="modal-contents-container">
          <button
            className="modal-close-button"
            type="button"
            onClick={() => setShowSkillsModal((prev) => !prev)}
          >
            <CloseIcon />
          </button>
          <p>스킬모달</p>
        </div>
      </div>
    </div>
  );
}
