import { atom } from 'recoil';

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

const showModalState = atom({
  key: 'showModalState',
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

export {
  carouselTransitionState,
  currentCarouselIndexState,
  currentIndexState,
  darkModeState,
  showModalState,
  stopIntervalState
};

