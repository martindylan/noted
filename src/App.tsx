import { useEffect, useState } from 'react';
import styles from './App.module.scss';
// Components
import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { useGlobal } from './GlobalContext';

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const { global } = useGlobal();

  const updateHeight = (e: UIEvent) => {
    const window = e.target as Window;
    if (!window) return;
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    }
  }, [])

  return (
    <div className={`${styles.App} ${styles[global.theme]}`} style={{ height: height }}>
      <Head />
      <Body />
    </div>
  );
}

export default App;
