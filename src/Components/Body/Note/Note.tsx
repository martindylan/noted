import { FunctionComponent } from 'react';
import styles from './Note.module.css';
import scrollable from '../../../Resources/CSS/scrollable.module.css';
// Components
import { NoteContextProvider } from './NoteContext';
import NoteTitle from './NoteTitle/NoteTitle';
import NoteContent from './NoteContent/NoteContent';

interface INoteProps {
  note: number;
}

const Note: FunctionComponent<INoteProps> = (props) => {
  return (
    <div className={`${styles.this}`} >
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