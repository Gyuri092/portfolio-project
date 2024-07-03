import { currentIndexState } from '@/recoil/atoms';
import '@/styles/carousel.scss';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { CarouselImageContainer } from './CarouselImageContainer/CarouselImageContainer';
import { ChevronButtons } from './ChevronButtons/ChevronButtons';
import { CircleButtons } from './CircleButtons/CircleButtons';
import imageDataJson from './data/imageData.json';

const backgroundColors = [
  'mbtiDetectiveBg',
  'whiteBg',
  'billiGBg',
  'whiteBg',
  'mbtiDetectiveBg',
];

export const Carousel = () => {
  const imageData = imageDataJson.array;
  const currentIndex = useRecoilValue(currentIndexState);
  const imageSrcArray = useMemo(() => {
    return [...imageData, imageData[0]] as string[];
  }, [imageData]);

  return (
    <div className={`carousel-container ${backgroundColors[currentIndex]}`}>
      <ChevronButtons
        imageData={imageData}
        backgroundColors={backgroundColors}
      />
      <CarouselImageContainer
        imageSrcArray={imageSrcArray}
        backgroundColors={backgroundColors}
      />
      <CircleButtons
        imageSrcArray={imageSrcArray}
        backgroundColors={backgroundColors}
      />
    </div>
  );
};
