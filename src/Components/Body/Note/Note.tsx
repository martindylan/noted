import { FunctionComponent } from 'react';
import Content from './Content/Content';
import Title from './Title/Title';
import styles from './Note.module.css';
import { useNotes } from '../NotesContext';

interface INoteProps {
  note: number;
}

const Note: FunctionComponent<INoteProps> = (props) => {
  const { notes, setNotes } = useNotes();

  return (
    <div className={styles.this}>
      <Title>{notes[props.note].title}</Title>
      <Content></Content>
    </div>
  )
}
export default Note;