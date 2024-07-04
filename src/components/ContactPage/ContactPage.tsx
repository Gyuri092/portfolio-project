import EmailIcon from '@/icons/email.svg';
import EmailIconInDarkMode from '@/icons/emailPastelLilac.svg';
import GithubIcon from '@/icons/github.svg';
import GithubIconInDarkMode from '@/icons/githubPastelLilac.svg';
import VelogIcon from '@/icons/velog.svg';
import VelogIconInDarkMode from '@/icons/velogPastelLilac.svg';
import { darkModeState } from '@/recoil/atoms';
import '@/styles/contactpage.scss';
import { useRecoilValue } from 'recoil';

export const ContactPage = () => {
  const darkMode = useRecoilValue(darkModeState);

  const emailIcon = darkMode ? <EmailIconInDarkMode /> : <EmailIcon />;
  const githubIcon = darkMode ? <GithubIconInDarkMode /> : <GithubIcon />;
  const velogIcon = darkMode ? <VelogIconInDarkMode /> : <VelogIcon />;

  const contactObject = {
    Email: ['ggr0927@gmail.com', emailIcon],
    Github: ['https://github.com/Gyuri092', githubIcon],
    Blog: ['https://velog.io/@gyuri092', velogIcon],
  };

  return (
    <div className="page-container">
      <div className="page-title">Contact</div>
      <div className="contact-page-contents">
        {Object.entries(contactObject).map(([key, value]) => {
          const stringValue = value[0] as string;
          const icon = value[1];
          return (
            <div key={key}>
              <div className="contact-page-subtitle-container">
                {icon}
                <p className="contact-page-subtitle">{key}</p>
              </div>

              <a
                className="contact-page-contents"
                href={
                  stringValue.includes('gmail')
                    ? `mailto:${stringValue}`
                    : stringValue
                }
                target="_blank"
                rel="noreferrer"
              >
                {stringValue}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
