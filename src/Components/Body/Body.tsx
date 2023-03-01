import { useNotes } from '../../NotesContext';
import styles from './Body.module.css';
// Components
import Nav from './Nav/Nav';
import Note from './Note/Note';

export default function Body() {

  const { notes, } = useNotes();

  return (
    <div className={styles.this}>
      <Nav></Nav>
      {Object.keys(notes).map((note: any) => { return <Note key={note} note={note}></Note> })}
    </div>
  )
}