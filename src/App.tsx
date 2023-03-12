import { useEffect, useState } from 'react';
import styles from './App.module.scss';
// Components
import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { GlobalProvider } from './GlobalContext';

function App() {
  const [height, setHeight] = useState(window.innerHeight);

  const updateHeight = (e: any) => {
    setHeight(e.target.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    }
  }, [])

  return (
    <div className={styles.App} style={{ height: height }}>
      <GlobalProvider>
        <Head />
        <Body />
      </GlobalProvider>
    </div>
  );
}

export default App;
