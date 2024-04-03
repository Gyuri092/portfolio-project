'use client';

import { Header } from '@/components/Header/Header.client';
import { darkModeState } from '@/recoil/atoms';
import { useRecoilValue } from 'recoil';

export const Page = () => {
  const darkMode = useRecoilValue(darkModeState);
  return (
    <div className={darkMode ? 'darkmode' : 'lightmode'}>
      <Header />
      <h1>Hello, Home page!</h1>
    </div>
  );
};

export default Page;
