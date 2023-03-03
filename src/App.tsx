import styles from './App.module.css';
// Components
import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { GlobalProvider } from './GlobalContext';

function App() {
  return (
    <div className={styles.App}>
      <Head></Head>
      <GlobalProvider>
        <Body></Body>
      </GlobalProvider>
    </div>
  );
}

export default App;
