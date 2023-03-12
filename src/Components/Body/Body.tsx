import { useGlobal } from '../../GlobalContext';
import styles from './Body.module.scss';
// Components
import Nav from './Nav/Nav';
import Note from './Note/Note';

export default function Body() {
  const { global } = useGlobal();
  const currentNote = global.currentNote;

  return (
    <div className={styles.Body}>
      <Nav />
      {global.notes[currentNote] && <Note key={currentNote} note={currentNote}></Note>}
      {!global.notes[currentNote] && <h2>{'<'}- add some notes!</h2>}
    </div>
  )
}