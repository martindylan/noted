import { FunctionComponent } from 'react';
import styles from './Note.module.scss';
import scrollable from '../../../Resources/SASS/scrollable.module.scss';
// Components
import { NoteContextProvider } from './NoteContext';
import NoteTitle from './NoteTitle/NoteTitle';
import NoteContent from './NoteContent/NoteContent';

interface INoteProps {
  note: number;
}

const Note: FunctionComponent<INoteProps> = (props) => {
  return (
    <div className={`${styles.Note}`} >
      <NoteContextProvider note={props.note}>
        <div className={scrollable.scrollable}>
          <NoteTitle></NoteTitle>
          <NoteContent></NoteContent>
        </div>
      </NoteContextProvider>
    </div>
  )
}
export default Note;