import { useGlobal } from '../../../GlobalContext';
import AddNote from './AddNote/AddNote';
import styles from './Nav.module.css'
import NavNote from './NavNote/NavNote';

export default function Nav() {

  const { global, setGlobal } = useGlobal();
  const notes = global.notes;

  const addNote = () => {
    const newNotes = [...notes];
    const newTitle = prompt('Give your note a fancy title:');
    newNotes.push({ title: newTitle, items: [{ content: '', type: 'text' }] });
    const newCurrent = newNotes.length - 1;
    setGlobal({ ...global, notes: newNotes, currentNote: newCurrent });
  }

  return (
    <div className={styles.this}>

      <div className={styles.list}>
        {notes.map((note: object, i: number) => {
          return <NavNote key={i} note={i}></NavNote>;
        })}
        <AddNote addNote={addNote}></AddNote>
      </div>
      <div className={styles.bottom}>
        {/* <span className={styles.text}>Coming to Android soon!</span> */}
        <button className={`${styles.text} ${styles.link}`}>Settings</button>
        <button className={`${styles.text} ${styles.link}`}>About</button>
      </div>
    </div>
  )
}