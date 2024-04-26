export const ProfilePage = () => {
  const objects = {
    학력: '명지대학교 정보통신공학과 2015.03 - 2020.02',
    경력: '휴멜로 2023.05 - 2023.11\n신성통상 2021.07 - 2022.07',
    교육: '엘리스 SW 엔지니어 트랙 3기 2022.09 - 2022.12',
    자격증: '정보처리기사 (한국산업인력공단) 2021.06',
  };
  return (
    <div className="page-container">
      <div className="page-title">Profile</div>
      <div className="page-contents">
        {Object.entries(objects).map(([key, value]) => {
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
