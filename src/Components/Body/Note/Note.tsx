import { FunctionComponent } from 'react';
import styles from './Note.module.css';
// Components
import { ContentProvider } from './ContentContext';
import NoteTitle from './NoteTitle/NoteTitle';
import NoteContent from './NoteContent/NoteContent';

interface INoteProps {
  note: number;
}

const Note: FunctionComponent<INoteProps> = (props) => {

  return (
    <div className={styles.this}>
      <ContentProvider note={props.note}>
        <NoteTitle></NoteTitle>
        <NoteContent></NoteContent>
      </ContentProvider>
    </div>
  )
}
export default Note;