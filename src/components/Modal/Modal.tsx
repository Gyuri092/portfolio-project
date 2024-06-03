import CloseIcon from '@/icons/close.svg';
import GithubIcon from '@/icons/githubBlack.svg';
import { currentCarouselIndexState, showModalState } from '@/recoil/atoms';
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

  const [, setShowModal] = useRecoilState(showModalState);
  const currentCarouselIndex = useRecoilValue(currentCarouselIndexState);

  const selectedProject = useMemo(() => {
    return projectDetailArray[currentCarouselIndex];
  }, [currentCarouselIndex, projectDetailArray]);

  const selectedProjectSkillList = useMemo(() => {
    return skillListArray[currentCarouselIndex];
  }, [currentCarouselIndex, skillListArray]);

  const objectKeys = useMemo(() => {
    return selectedProjectSkillList && Object.keys(selectedProjectSkillList);
  }, [selectedProjectSkillList]);

  return (
    <div className="modal-background">
      <div className="modal-container">
        <ModalCarousel />
        <div>
          <div className="modal-contents-title-container">
            <a className="modal-contents-title" href={selectedProject?.link}>
              {selectedProject?.title}
            </a>
            <button type="button" onClick={() => setShowModal((prev) => !prev)}>
              <CloseIcon />
            </button>
          </div>
          <p className="modal-contents-date">{selectedProject?.date}</p>
          <p className="modal-contents-summary">{selectedProject?.summary}</p>
          <div className="modal-github-link-container">
            <p>Github : </p>
            <GithubIcon />
            <a href={selectedProject?.github}>{selectedProject?.github}</a>
          </div>
          <p>{selectedProject?.explanation}</p>

          <div
            className="modal-skills-list"
            key={selectedProjectSkillList?.title}
          >
            {objectKeys &&
              objectKeys.map((elem) => {
                if (
                  selectedProjectSkillList &&
                  selectedProjectSkillList[elem]
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
