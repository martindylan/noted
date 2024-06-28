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

const Note = (props: INoteProps) => {
  const { global } = useGlobal();

  return (
    <div className={`${styles.Note} ${styles[global.theme]}`} >
      <NoteContextProvider index={props.note}>
        <div className={`${scrollable.scrollable} ${scrollable[global.theme]}`} style={{ overflowX: 'hidden' }}>
          <NoteTitle></NoteTitle>
          <NoteContent></NoteContent>
        </div>
      </NoteContextProvider>
    </div>
  )
}
export default Note;