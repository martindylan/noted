import { FunctionComponent } from 'react';
import styles from './AddNote.module.css';
import button from '../../../../Resources/CSS/button.module.css';

interface IAddNoteProps {
  addNote: () => void;
}

const AddNote: FunctionComponent<IAddNoteProps> = (props) => {

  return (
    <button className={`${styles.this} ${button.button}`} onClick={props.addNote}>+</button>
  )
}

export default AddNote;