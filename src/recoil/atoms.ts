import { atom } from 'recoil';

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

const showProjectsModalState = atom({
  key: 'showProjectsModalState',
  default: false,
});

const showSkillsModalState = atom({
  key: 'showSkillsModalState',
  default: false,
});

const currentIndexState = atom({
  key: 'currentIndexState',
  default: 0,
});

const currentCarouselIndexState = atom({
  key: 'currentCarouselIndexState',
  default: 0,
});

const carouselTransitionState = atom({
  key: 'carouselTransitionState',
  default: '',
});

const stopIntervalState = atom({
  key: 'stopIntervalState',
  default: false,
});

const showSkillsDetailState = atom({
  key: 'showSkillsDetailState',
  default: false,
});

const clickedSkillsState = atom<string[]>({
  key: 'clickedSkillsState',
  default: [],
});

export {
  carouselTransitionState,
  clickedSkillsState,
  currentCarouselIndexState,
  currentIndexState,
  darkModeState,
  showProjectsModalState,
  showSkillsDetailState,
  showSkillsModalState,
  stopIntervalState,
};
