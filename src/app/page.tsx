'use client';

import ContactPage from '@/components/ContactPage/ContactPage';
import ExperiencePage from '@/components/ExperiencePage/ExperiencePage';
import Header from '@/components/Header/Header.client';
import HowIWorkPage from '@/components/HowIWorkPage/HowIWorkPage';
import MainPage from '@/components/MainPage/MainPage';
import ProfilePage from '@/components/ProfilePage/ProfilePage';
import ProjectsPage from '@/components/ProjectsPage/ProjectsPage';
import SkillsPage from '@/components/SkillsPage/SkillsPage';
import { darkModeState } from '@/recoil/atoms';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

export default function Page() {
  const darkMode = useRecoilValue(darkModeState);
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
        <ExperiencePage />
        <HowIWorkPage />
        <ContactPage />
      </div>
    </div>
  );
}
