import styles from './AddNote.module.scss';
import button from 'Resources/SASS/button.module.scss';
import addImg from 'Resources/Img/add.png';
import { useGlobal } from 'GlobalContext';

interface IAddNoteProps {
  addNote: () => void;
}

const AddNote = (props: IAddNoteProps) => {

  const {global} = useGlobal();

  return (
    <button className={`${styles.AddNote} ${button.button} ${button[global.theme]}`} onClick={props.addNote}><img className={button[global.theme]} src={addImg} alt='+'></img></button>
  )
}

export default AddNote;