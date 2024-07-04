import { darkModeState } from '@/recoil/atoms';
import '@/styles/mainpage.scss';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function MainPage() {
  const darkMode = useRecoilValue(darkModeState);
  const [word, setWord] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sentence = 'Gyuri Gwon Portfolio';
    const typingInterval = setInterval(() => {
      setWord((prev) => {
        const result = prev + sentence[count];
        const nextCount = count + 1;
        setCount(nextCount);

        if (count >= sentence.length) {
          // setCount(0);
          clearInterval(typingInterval);
          return prev;
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);

  return (
    <div className={`${darkMode ? 'darkmode' : 'lightmode'} mainpage`}>
      <p className="mainpage-text"> {word}</p>
    </div>
  );
}
