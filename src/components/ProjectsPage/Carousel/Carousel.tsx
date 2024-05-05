import ChevronLeftIcon from '@/icons/chevronLeft.svg';
import ChevronRightIcon from '@/icons/chevronRight.svg';
import '@/styles/carousel.scss';
import Image from 'next/image';
import imageDataJson from './data/imageData.json';

export const Carousel = () => {
  const imageData = imageDataJson.array;

  return (
    <div className="carousel-container">
      <button type="button">
        <ChevronLeftIcon />
      </button>
      {imageData.map((elem) => {
        return (
          <div key={elem.title} className="carousel-image-container">
            <Image
              src={elem.src}
              alt={elem.title}
              width={elem.size.width}
              height={elem.size.height}
            />
          </div>
        );
      })}
      <button type="button">
        <ChevronRightIcon />
      </button>
    </div>
  );
};
