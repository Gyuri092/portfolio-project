import { currentCarouselIndexState } from '@/recoil/atoms';
import '@/styles/modalcarousel.scss';
import Image from 'next/image';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import modalCarouselImageJson from './data/modalCarouselImage.json';

export const ModalCarousel = () => {
  const imageSrcArray = modalCarouselImageJson.images;
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);

  const imageSrc = useMemo(() => {
    return imageSrcArray[currentCarouselIndex] ?? '';
  }, [currentCarouselIndex, imageSrcArray]);

  return (
    <div className="modal-carousel-container">
      <div
        className="modal-carousel-image-container"
        style={{ transform: `translateX(-${1 * 100}%)` }}
      >
        <div
          key={imageSrcArray[currentCarouselIndex]}
          className="modal-carousel-image-box"
        >
          {imageSrc.split('\n').map((image) => (
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
    </div>
  );
};
