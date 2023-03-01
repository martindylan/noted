import { useNotes } from '../../../NotesContext';
import styles from './Nav.module.css'

export default function Nav() {

  const { notes, } = useNotes();

  return (
    <div className={styles.this}>
      <ul>
        {Object.keys(notes).map((note) => {
          return <li className={styles.note} key={note}>{notes[note].title}</li>;
        })}
      </ul>
    </div>
  )
}