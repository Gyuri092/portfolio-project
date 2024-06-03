import { atom } from 'recoil';

const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});

const showModalState = atom({
  key: 'showModalState',
  default: false,
});

const currentCarouselIndexState = atom({
  key: 'currentCarouselIndexState',
  default: 0,
});

export { currentCarouselIndexState, darkModeState, showModalState };
