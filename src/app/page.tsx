'use client';

import { ContactPage } from '@/components/ContactPage/ContactPage';
import { ExperiencePage } from '@/components/ExperiencePage/ExperiencePage';
import { Header } from '@/components/Header/Header.client';
import { HowIWorkPage } from '@/components/HowIWorkPage/HowIWorkPage';
import { MainPage } from '@/components/MainPage/MainPage';
import { ProfilePage } from '@/components/ProfilePage/ProfilePage';
import { ProjectsPage } from '@/components/ProjectsPage/ProjectsPage';
import { SkillsPage } from '@/components/SkillsPage/SkillsPage';
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
        <ProfilePage />
        <SkillsPage />
        <ProjectsPage />
        <ExperiencePage />
        <HowIWorkPage />
        <ContactPage />
      </FullScreen>
    </div>
  );
};

export default Page;
