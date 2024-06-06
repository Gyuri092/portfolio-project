import { currentCarouselIndexState } from '@/recoil/atoms';
import '@/styles/modalcarousel.scss';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import modalCarouselImageJson from './data/modalCarouselImage.json';

export const ModalCarousel = () => {
  const imageJsonArray = modalCarouselImageJson.images;
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSrc = useMemo(() => {
    return imageJsonArray[currentCarouselIndex] ?? '';
  }, [currentCarouselIndex, imageJsonArray]);

  const imageSrcArray = useMemo(() => imageSrc.split('\n'), [imageSrc]);

  const nextSlide = useCallback(() => {
    if (currentIndex >= imageSrcArray.length + 1) {
      setCurrentIndex(1);
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % imageSrcArray.length);
  }, [currentIndex, imageSrcArray.length]);

  useEffect(() => {
    const timeout = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timeout);
  }, [nextSlide]);

  return (
    <div className="modal-carousel-container">
      <div
        className="modal-carousel-image-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <Image
          className="modal-carousel-image"
          src={imageSrcArray[imageSrcArray.length - 1] ?? ''}
          alt={imageSrcArray[imageSrcArray.length - 1] ?? ''}
          width={412}
          height={630}
        />
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
        <Image
          className="modal-carousel-image"
          src={imageSrcArray[0] ?? ''}
          alt={imageSrcArray[0] ?? ''}
          width={412}
          height={630}
        />
      </div>
    </div>
  );
};
