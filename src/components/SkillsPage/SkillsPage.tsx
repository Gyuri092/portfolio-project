import '@/styles/skillspage.scss';

export const SkillsPage = () => {
  const objects = {
    'Front-End':
      'HTML, CSS\nJavaScript, TypeScript\nReact, Next.js\nRedux, Recoil, Zustand\nReact-query, SWR\nTailwindCSS, Styled-Components, Emotion',
    Database: 'Oracle, MS-SQL',
    Tools: 'VScode, Github, Gitlab\nFigma, Figjam\nNotion, Discord, Slack',
  };
  return (
    <div className="skills-page-container">
      <div className="skills-page-title">Skills</div>
      <div className="skills-page-contents">
        {Object.entries(objects).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="subtitle">{key}</p>
              <ul>
                {value.split('\n').map((text) => (
                  <li className="contents" key={text}>
                    {text.split(',').map((elem, index) => (
                      <button key={elem} className={key} type="button">
                        {`${elem}${index !== text.split(',').length - 1 ? ',' : ''}`}
                      </button>
                    ))}
                    {/* <div className="contents-detail">dsad</div> */}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
