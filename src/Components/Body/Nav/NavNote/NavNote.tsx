import React, { useRef } from 'react'
import { useGlobal } from '../../../../GlobalContext';
import styles from './NavNote.module.scss';
import editImg from '../../../../Resources/Img/edit.png';
import trashcanImg from '../../../../Resources/Img/trashcan.png';
import button from '../../../../Resources/SASS/button.module.scss';
import WindowedSection from '../../../UI/WindowedSection/WindowedSection';

interface INavNoteProps {
  note: number;
}

const NavNote = (props: INavNoteProps) => {

  const { global, setGlobal } = useGlobal();

  const currentNote = global.currentNote;
  const { note } = props;
  const isCurrent = currentNote === note;

  const inputRef = useRef<HTMLSpanElement>(null);

  const selectNote = () => {
    setGlobal({ ...global, currentNote: note });
  }

  const removeNote = () => {
    const confirmation = window.confirm('Are you sure you want to delete this note?');
    if (!confirmation) return;
    let newNotes = [...global.notes];
    newNotes.splice(note, 1);
    let newCurrentNote = currentNote - 1;
    setGlobal({ ...global, notes: newNotes, currentNote: newCurrentNote });
  }

  const editNote = () => {
    setGlobal({ ...global, currentNote: note, dropDown: false });
  }

  const keyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    selectNote();
  }

  return (
    <div className={`${styles.NavNote} ${styles[global.theme]}`}>
      <div className={`${styles.bullet} ${styles['current' + isCurrent]}`}></div>
      <span tabIndex={0} ref={inputRef} className={`${styles.title} ${styles['current' + isCurrent]}`} onClick={selectNote} onKeyDown={keyDown}>{global.notes[note].title}</span>
      {currentNote === note &&
        <>
          <button className={`${button.button} ${button[global.theme]}`} onClick={removeNote}><img className={button[global.theme]} src={trashcanImg} alt='delete'></img></button>
          <button className={`${button.button} ${button[global.theme]} ${styles.editButton}`} onClick={editNote}><img className={button[global.theme]} src={editImg} alt='edit'></img></button>
        </>
      }
      <WindowedSection open={false} setOpen={()=>{}}>
        xd
      </WindowedSection>
    </div>
  )
}
export default NavNote;