import { FunctionComponent } from 'react'
import styles from './AddNote.module.css'

interface IAddNoteProps {
  addNote: () => void;
}

const AddNote: FunctionComponent<IAddNoteProps> = (props) => {

  return (
    <button className={styles.this} onClick={props.addNote}>+</button>
  )
}

export default AddNote;