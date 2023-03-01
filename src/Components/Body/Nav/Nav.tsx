import { useGlobal } from '../../../GlobalContext';
import styles from './Nav.module.css'

export default function Nav() {

  const { global, } = useGlobal();
  const notes = global.notes;

  return (
    <div className={styles.this}>
      <ul>
        {Object.keys(notes).map((note) => {
          return <li className={styles.note} key={note}>{notes[note].title}</li>;
        })}
      </ul>
      <button>Coming to Android soon!</button>
      <button className={styles.link}>About</button>
    </div>
  )
}