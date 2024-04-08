'use client';

import { Header } from '@/components/Header/Header.client';
import { MainPage } from '@/components/MainPage/MainPage';
import { darkModeState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

export const Page = () => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div className={`${darkMode ? 'darkmode' : 'lightmode'} rootpage`}>
      <Header />
      <MainPage />
    </div>
  );
};

export default Page;
