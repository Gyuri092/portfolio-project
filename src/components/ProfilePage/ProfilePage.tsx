import profileDataJson from './data/profileData.json';

export const ProfilePage = () => {
  const profileData = profileDataJson;
  return (
    <div className="page-container">
      <div className="page-title">Profile</div>
      <div className="page-contents">
        {Object.entries(profileData).map(([key, value]) => {
          return (
            <div key={key}>
              <p className="subtitle">{key}</p>
              {value.split('\n').map((text) => (
                <p className="contents" key={text}>
                  {text}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
