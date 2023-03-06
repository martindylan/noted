import { useGlobal } from '../../GlobalContext';
import styles from './Body.module.css';
// Components
import Nav from './Nav/Nav';
import Note from './Note/Note';

export default function Body() {

  const { global, } = useGlobal();
  const currentNote = global.currentNote;

  return (
    <div className={styles.this}>
      <Nav></Nav>
      <Note key={currentNote} note={currentNote}></Note>
    </div>
  )
}