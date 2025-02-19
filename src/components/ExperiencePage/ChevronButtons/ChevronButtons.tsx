import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import { darkModeState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

export const ChevronButtons = ({
  updateCurrentIndex,
}: {
  updateCurrentIndex: (direction: string) => void;
}) => {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <div className="experience-chevron-button-container">
      <button
        type="button"
        className="chevron-button"
        onClick={() => updateCurrentIndex('left')}
      >
        {darkMode ? <ChevronLeftIcon /> : <ChevronLeftGrayIcon />}
      </button>
      <button
        type="button"
        className="chevron-button"
        onClick={() => updateCurrentIndex('right')}
      >
        {darkMode ? <ChevronRightIcon /> : <ChevronRightGrayIcon />}
      </button>
    </div>
  );
};
