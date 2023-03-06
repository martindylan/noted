import { FunctionComponent } from 'react';
import styles from './AddNote.module.css';
import button from '../../../../Resources/CSS/button.module.css';
import addImg from '../../../../Resources/Img/add.png';

interface IAddNoteProps {
  addNote: () => void;
}

const AddNote: FunctionComponent<IAddNoteProps> = (props) => {

  return (
    <button className={`${styles.this} ${button.button}`} onClick={props.addNote}><img src={addImg} alt='+'></img></button>
  )
}

export default AddNote;