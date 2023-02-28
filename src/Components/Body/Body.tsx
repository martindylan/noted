import Note from './Note/Note';
import Nav from './Nav/Nav';
import styles from './Body.module.css';
import { NotesProvider, useNotes } from './NotesContext';

export default function Body() {

  return (
    <div className={styles.this}>
      <NotesProvider>
        <Nav></Nav>
        <Note note={0}></Note>
      </NotesProvider>
    </div>
  )
}