import styles from './App.module.css';
// Components
import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { GlobalProvider } from './GlobalContext';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.head}>
        <Head></Head>
      </div>
      <GlobalProvider>
        <div className={styles.body}>
          <Body></Body>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
