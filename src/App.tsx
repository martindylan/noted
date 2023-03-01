import styles from './App.module.css';
// Components
import Body from './Components/Body/Body';
import Head from './Components/Head/Head';
import { NotesProvider } from './NotesContext';

function App() {
  return (
    <div className={styles.App}>
      <Head></Head>
      <NotesProvider>
        <Body></Body>
      </NotesProvider>
    </div>
  );
}

export default App;
