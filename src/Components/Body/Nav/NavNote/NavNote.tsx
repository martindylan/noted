import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useGlobal } from '../../../../GlobalContext';
import styles from './NavNote.module.css';
import editImg from '../../../../Resources/Img/edit.png';
import trashcanImg from '../../../../Resources/Img/trashcan.png';
import button from '../../../../Resources/CSS/button.module.css';

interface INavNoteProps {
  note: number;
}

const NavNote: FunctionComponent<INavNoteProps> = (props) => {

  const { global, setGlobal } = useGlobal();
  const [isCurrent, setIsCurrent] = useState(false);
  const notes = global.notes;
  
  const currentNote = global.currentNote;
  const { note } = props;
  const inputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsCurrent(currentNote === note);
  }, [currentNote])

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

  return (
    <div className={styles.this}>
      <div className={`${styles.bullet} ${styles['current' + isCurrent]}`}></div>
      <span ref={inputRef} className={`${styles.title} ${styles['current' + isCurrent]}`} onClick={selectNote}>{notes[note].title}</span>
      {currentNote === note &&
        <>
          <button className={button.button} onClick={removeNote}><img src={trashcanImg} alt='delete'></img></button>
          <button className={`${styles.editButton} ${button.button}`} onClick={editNote}><img src={editImg} alt='edit'></img></button>
        </>
      }
    </div>
  )
}
export default NavNote;