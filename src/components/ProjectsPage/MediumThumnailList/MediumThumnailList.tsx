import { currentCarouselIndexState, showModalState } from '@/recoil/atoms';
import '@/styles/mediumthumnaillist.scss';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import imageDataJson from './data/imageData.json';

export default function MediumThumnailList() {
  const imageDataArray = imageDataJson.array;
  const [, setShowModal] = useRecoilState(showModalState);
  const [, setCurrentCarouselIndex] = useRecoilState(currentCarouselIndexState);
  return (
    <div className="thumnaillist-container">
      {imageDataArray.map((elem, index) => (
        <div key={elem} className="thumnaillist-image-container">
          <Image src={elem} alt={elem} width={360} height={240} />
          <button
            type="button"
            onClick={() => {
              setCurrentCarouselIndex(index);
              setShowModal((prev) => !prev);
            }}
          />
        </div>
      ))}
    </div>
  );
}
