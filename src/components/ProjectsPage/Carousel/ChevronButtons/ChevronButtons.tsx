import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronLeftGrayIcon from '@/icons/chevronLeftGray.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import ChevronRightGrayIcon from '@/icons/chevronRightGray.svg';
import { carouselTransitionState, currentIndexState } from '@/recoil/atoms';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  imageSrcArray: string[];
  backgroundColors: string[];
}

export default function ChevronButtons(props: Props) {
  const { imageSrcArray, backgroundColors } = props;
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const [, setCarouselTransition] = useRecoilState(carouselTransitionState);

  const resetIndexAndTransition = useCallback(
    (newIndex: number, transition: string) => {
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setCarouselTransition(transition);
      }, 10);
    },
    [setCarouselTransition, setCurrentIndex],
  );

  const nextSlide = () => {
    if (currentIndex === imageSrcArray.length - 1) {
      resetIndexAndTransition(0, 'none');
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrcArray.length);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCarouselTransition('none');
      setCurrentIndex(imageSrcArray.length - 1);
      resetIndexAndTransition(
        imageSrcArray.length - 2,
        'transform 0.5s ease-in-out',
      );
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + imageSrcArray.length) % imageSrcArray.length,
      );
    }
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
}
