import { currentCarouselIndexState } from '@/recoil/atoms';
import '@/styles/modalcarousel.scss';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import modalCarouselImageJson from './data/modalCarouselImage.json';

export const ModalCarousel = () => {
  const imageJsonArray = modalCarouselImageJson.images;
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselTransition, setCarouselTransition] = useState('');

  const imageSrc = useMemo(() => {
    return imageJsonArray[currentCarouselIndex] ?? imageJsonArray[0] ?? '';
  }, [currentCarouselIndex, imageJsonArray]);

  const imageSrcArray = useMemo(() => {
    const splitArray = imageSrc.split('\n');
    return [...splitArray, splitArray[0]] as string[];
  }, [imageSrc]);

  const resetIndexAndTransition = useCallback(() => {
    setTimeout(() => {
      setCarouselIndex(0);
      setCarouselTransition('none');
    }, 10);
  }, []);

  const controlTime = useMemo(() => {
    return carouselTransition === 'none' ? 10 : 2000;
  }, [carouselTransition]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselIndex === imageSrcArray.length - 1) {
        resetIndexAndTransition();
      }
      setCarouselIndex((prev) => (prev + 1) % imageSrcArray.length);
      setCarouselTransition('transform 0.5s ease-in-out');
    }, controlTime);

    return () => clearInterval(timer);
  }, [
    carouselIndex,
    controlTime,
    imageSrcArray.length,
    resetIndexAndTransition,
  ]);

  const getCarouselStyles = () => {
    return {
      transform: `translateX(-${carouselIndex * 100}%)`,
      transition: `${carouselTransition}`,
    };
  };

  return (
    <div className="modal-carousel-container">
      <div
        className="modal-carousel-image-container"
        style={getCarouselStyles()}
      >
        {imageSrcArray.map((image, index) => (
          <Image
            key={`${index - 0}`}
            src={image}
            alt={image}
            width={412}
            height={630}
          />
        ))}
      </div>
    </div>
  );
};
