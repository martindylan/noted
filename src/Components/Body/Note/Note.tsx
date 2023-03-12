import { FunctionComponent } from 'react';
import styles from './Note.module.scss';
import scrollable from '../../../Resources/SASS/scrollable.module.scss';
// Components
import { NoteContextProvider } from './NoteContext';
import NoteTitle from './NoteTitle/NoteTitle';
import NoteContent from './NoteContent/NoteContent';
import { useGlobal } from '../../../GlobalContext';

interface INoteProps {
  note: number;
}

const Note: FunctionComponent<INoteProps> = (props) => {
  const { global } = useGlobal();
  
  return (
    <div className={`${styles.Note}`} >
      <NoteContextProvider note={props.note}>
        <div className={`${scrollable.scrollable} ${scrollable[global.theme]}`}>
          <NoteTitle></NoteTitle>
          <NoteContent></NoteContent>
        </div>
      </NoteContextProvider>
    </div>
  )
}
export default Note;