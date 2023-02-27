import Note from './Note/Note';
import Nav from './Nav/Nav';
import styles from './Body.module.css'

export default function Body() {

  return (
    <div className={styles.this}>
      <Nav></Nav>
      <Note note={0} title='Welcome'></Note>
    </div>
  )
}