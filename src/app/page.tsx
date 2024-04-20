'use client';

import { Header } from '@/components/Header/Header.client';
import { MainPage } from '@/components/MainPage/MainPage';
import { darkModeState } from '@/recoil/atoms';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useRecoilValue } from 'recoil';

export const Page = () => {
  const darkMode = useRecoilValue(darkModeState);
  const handle = useFullScreenHandle();
  return (
    <div className={`${darkMode ? 'darkmode' : 'lightmode'} rootpage`}>
      <FullScreen className="fullscreen-container" handle={handle}>
        <Header handle={handle} />
        <MainPage />
      </FullScreen>
    </div>
  );
};

export default Page;
