import { currentCarouselIndexState } from '@/recoil/atoms';
import '@/styles/modalcarousel.scss';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import modalCarouselImageJson from './data/modalCarouselImage.json';

export const ModalCarousel = () => {
  const imageJsonArray = modalCarouselImageJson.images;
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState('');

  const imageSrc = useMemo(() => {
    return imageJsonArray[currentCarouselIndex] ?? '';
  }, [currentCarouselIndex, imageJsonArray]);

  const imageSrcArray = useMemo(() => {
    const splitArray = imageSrc.split('\n');
    return [
      splitArray[splitArray.length - 1],
      ...splitArray,
      splitArray[0],
    ] as string[];
  }, [imageSrc]);

  const updateIndexAndTransition = useCallback((index: number) => {
    setTimeout(() => {
      setCarouselIndex(index);
      setCarouselTransition('none');
    }, 10);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselIndex === imageSrcArray.length - 1) {
        updateIndexAndTransition(1);
      } else if (carouselIndex === 0) {
        updateIndexAndTransition(imageSrcArray.length - 1);
      }
      setCarouselIndex((prev) => (prev + 1) % imageSrcArray.length);
      setCarouselTransition('transform 0.5s ease-in-out');
    }, 2000);

    return () => clearInterval(timer);
  }, [carouselIndex, imageSrcArray.length, updateIndexAndTransition]);

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
        {imageSrcArray.map((image) => (
          <Image
            key={image}
            className="modal-carousel-image"
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
