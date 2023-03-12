import { FunctionComponent } from 'react';
import styles from './AddNote.module.scss';
import button from '../../../../Resources/SASS/button.module.scss';
import addImg from '../../../../Resources/Img/add.png';

interface IAddNoteProps {
  addNote: () => void;
}

const AddNote: FunctionComponent<IAddNoteProps> = (props) => {

  return (
    <button className={`${styles.AddNote} ${button.button}`} onClick={props.addNote}><img src={addImg} alt='+'></img></button>
  )
}

export default AddNote;