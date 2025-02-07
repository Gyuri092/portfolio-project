import {
  currentCarouselIndexState,
  showProjectsModalState,
} from '@/recoil/atoms';
import '@/styles/mediumthumnaillist.scss';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import imageDataJson from './data/imageData.json';

export default function MediumThumnailList() {
  const imageDataArray = imageDataJson.array;
  const [, setShowProjectsModal] = useRecoilState(showProjectsModalState);
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
              setShowProjectsModal((prev) => !prev);
            }}
          />
        </div>
      ))}
    </div>
  );
}
