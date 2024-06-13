import CloseIcon from '@/icons/close.svg';
import GithubIcon from '@/icons/githubBlack.svg';
import {
  currentCarouselIndexState,
  showModalState,
  stopIntervalState,
} from '@/recoil/atoms';
import '@/styles/modal.scss';
import { SkillListObjectType } from '@/types/types';
import { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ModalCarousel } from './ModalCarousel/ModalCarousel';
import projectDetailJson from './data/projectContentsDetail.json';
import skillListJson from './data/skillList.json';

export const Modal = () => {
  const skillListArray: SkillListObjectType[] = skillListJson.skills;
  const projectDetailArray = projectDetailJson.contents;

  const [, setStopInterval] = useRecoilState(stopIntervalState);
  const [, setShowModal] = useRecoilState(showModalState);
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);

  const selectedProject = useMemo(() => {
    return projectDetailArray[currentCarouselIndex] ?? projectDetailArray[0];
  }, [currentCarouselIndex, projectDetailArray]);

  const selectedProjectSkillList = useMemo(() => {
    return skillListArray[currentCarouselIndex] ?? skillListArray[0];
  }, [currentCarouselIndex, skillListArray]);

  const objectKeys = useMemo(() => {
    return selectedProjectSkillList && Object.keys(selectedProjectSkillList);
  }, [selectedProjectSkillList]);

  return (
    <div className="modal-background">
      <button
        className="modal-background-close-button"
        type="button"
        onClick={() => {
          setShowModal((prev) => !prev);
          setStopInterval((prev) => !prev);
        }}
      />
      <div className="modal-container">
        <ModalCarousel />
        <div className="modal-contents-container">
          <div>
            <a
              className="modal-contents-title"
              href={selectedProject?.link}
              target="_blank"
              rel="noreferrer"
            >
              {selectedProject?.title}
            </a>
            <button
              className="modal-close-button"
              type="button"
              onClick={() => {
                setShowModal((prev) => !prev);
                setStopInterval((prev) => !prev);
              }}
            >
              <CloseIcon />
            </button>
            <p className="modal-contents-date">{selectedProject?.date}</p>
            <p className="modal-contents-summary">{selectedProject?.summary}</p>
            {selectedProject?.github && (
              <div className="modal-github-link-container">
                <p>Github : </p>
                <GithubIcon />
                <a
                  href={selectedProject?.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {selectedProject?.github}
                </a>
              </div>
            )}
            <p>{selectedProject?.explanation}</p>
          </div>

          <div
            className="modal-skills-list"
            key={selectedProjectSkillList?.title}
          >
            {objectKeys &&
              objectKeys.map((elem) => {
                if (
                  selectedProjectSkillList &&
                  selectedProjectSkillList[elem] &&
                  elem !== 'title'
                ) {
                  return (
                    <div key={elem} className="modal-skills-part">
                      <p>{elem}</p>
                      <p>{selectedProjectSkillList[elem]}</p>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
