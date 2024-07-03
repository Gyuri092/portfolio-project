import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import { currentIndexState } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

interface Props {
  imageData: string[];
  backgroundColors: string[];
}

export const ChevronButtons = (props: Props) => {
  const { imageData, backgroundColors } = props;
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length,
    );
  };

  return (
    <div className="chevron-button-container">
      <button type="button" className="chevron-button" onClick={prevSlide}>
        {backgroundColors[currentIndex] === 'whiteBg' ? (
          <ChevronLeftGrayIcon />
        ) : (
          <ChevronLeftIcon />
        )}
      </button>
      <button type="button" className="chevron-button" onClick={nextSlide}>
        {backgroundColors[currentIndex] === 'whiteBg' ? (
          <ChevronRightGrayIcon />
        ) : (
          <ChevronRightIcon />
        )}
      </button>
    </div>
  );
};
