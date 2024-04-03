import { darkModeState } from '@/recoil/atoms';
import '@/styles/mainpage.scss';
import { useRecoilValue } from 'recoil';

export const MainPage = () => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div className={`${darkMode ? 'darkmode' : 'lightmode'} mainpage`}>
      Gyuri Gwon Portfolio
    </div>
  );
};
