import GithubInDarkMode from '@/icons/githubInDarkMode.svg';
import '@/styles/modal.scss';
import { ModalCarousel } from './ModalCarousel/ModalCarousel';
import skillListJson from './data/skillList.json';

export const Modal = () => {
  const skillListArray = skillListJson.skills;
  return (
    <div className="modal-background">
      <div className="modal-container">
        <ModalCarousel />
        <div>
          <a className="modal-contents-title" href="fas">
            제목
          </a>
          <p className="modal-contents-date">날짜</p>
          <p className="modal-contents-summary">개요</p>
          <div className="modal-github-link-container">
            <p>Github : </p>
            <GithubInDarkMode />
            <a href="absc">깃허브링크</a>
          </div>
          <p>내용</p>
          <div>
            {skillListArray.map((elem) => {
              return (
                <div className="modal-skills-list" key={elem.title}>
                  <div className="modal-skills-part">
                    <p>Front-End</p>
                    <p>{elem['Front-End']}</p>
                  </div>
                  <div>
                    <p>Back-End</p>
                    <p>{elem['Back-End']}</p>
                  </div>
                  <div>
                    <p>Database</p>
                    <p>{elem.Database}</p>
                  </div>
                  <div>
                    <p>Deployment</p>
                    <p>{elem.Deployment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
