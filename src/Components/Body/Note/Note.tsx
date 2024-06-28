import styles from './Note.module.scss';
import scrollable from 'Resources/SASS/scrollable.module.scss';
// Components
import { NoteContextProvider } from 'Components/Body/Note/NoteContext';
import NoteTitle from 'Components/Body/Note/NoteTitle/NoteTitle';
import NoteContent from 'Components/Body/Note/NoteContent/NoteContent';
import { useGlobal } from 'GlobalContext';

interface INoteProps {
  note: number;
}

const Note = (props: INoteProps) => {
  const { global } = useGlobal();

  return (
    <div className={`${styles.Note} ${styles[global.theme]}`} >
      <NoteContextProvider index={props.note}>
        <div className={`${scrollable.scrollable} ${scrollable[global.theme]}`} style={{ overflowX: 'hidden', gap: '16px' }}>
          <NoteTitle></NoteTitle>
          <NoteContent></NoteContent>
        </div>
      </NoteContextProvider>
    </div>
  )
}
export default Note;