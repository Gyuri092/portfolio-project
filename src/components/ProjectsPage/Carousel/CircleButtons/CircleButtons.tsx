import { currentIndexState } from '@/recoil/atoms';
import { useRecoilState } from 'recoil';

interface Props {
  imageSrcArray: string[];
  backgroundColors: string[];
}

export const CircleButtons = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState);
  const { imageSrcArray, backgroundColors } = props;
  const getButtonClassName = (index: number) => {
    const initialClassName = 'circle-index-button';
    const isActive =
      index === (currentIndex === imageSrcArray.length - 1 ? 0 : currentIndex)
        ? 'active'
        : '';
    const isWhiteBackgroud =
      backgroundColors[currentIndex] === 'whiteBg' ? 'whiteBg' : '';
    return [initialClassName, isActive, isWhiteBackgroud].join(' ');
  };

  return (
    <div className="circle-index-button-container">
      {imageSrcArray.map((elem, index) => {
        const title = elem.split('\n')[0] as string;
        if (index === imageSrcArray.length - 1) return null;
        return (
          <button
            className={getButtonClassName(index)}
            type="button"
            key={title}
            onClick={() => setCurrentIndex(index)}
          />
        );
      })}
    </div>
  );
};
