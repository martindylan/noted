import { useGlobal } from '../../GlobalContext';
import styles from './Body.module.css';
// Components
import Nav from './Nav/Nav';
import Note from './Note/Note';

export default function Body() {

  const { global, } = useGlobal();
  const notes = global.notes;

  return (
    <div className={styles.this}>
      <div className={styles.nav}>
        <Nav></Nav>
      </div>
      {Object.keys(notes).map((note: any) => { return <Note key={note} note={note}></Note> })}
    </div>
  )
}