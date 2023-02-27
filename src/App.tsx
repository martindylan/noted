import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { ItemsProvider } from './ItemsContext';
import styles from './App.module.css';

function App() {
  return (
    <ItemsProvider>
      <div className={styles.App}>
        <Head></Head>
        <Body></Body>
      </div>
    </ItemsProvider>
  );
}

export default App;
