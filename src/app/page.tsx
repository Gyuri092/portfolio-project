'use client';

import { ContactPage } from '@/components/ContactPage/ContactPage';
import { ExperiencePage } from '@/components/ExperiencePage/ExperiencePage';
import { Header } from '@/components/Header/Header.client';
import { HowIWorkPage } from '@/components/HowIWorkPage/HowIWorkPage';
import { MainPage } from '@/components/MainPage/MainPage';
import { Modal } from '@/components/Modal/Modal';
import { ProfilePage } from '@/components/ProfilePage/ProfilePage';
import { ProjectsPage } from '@/components/ProjectsPage/ProjectsPage';
import { SkillsPage } from '@/components/SkillsPage/SkillsPage';
import { darkModeState, showModalState } from '@/recoil/atoms';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

export const Page = () => {
  const darkMode = useRecoilValue(darkModeState);
  const showModal = useRecoilValue(showModalState);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${darkMode ? 'darkmode' : 'lightmode'} rootpage`}
      ref={containerRef}
    >
      <div className="wrapper">
        <Header containerRef={containerRef} />
        <MainPage />
        <ProfilePage />
        <SkillsPage />
        <ProjectsPage />
        {showModal && createPortal(<Modal />, document.body)}
        <ExperiencePage />
        <HowIWorkPage />
        <ContactPage />
      </div>
    </div>
  );
};

export default Page;
