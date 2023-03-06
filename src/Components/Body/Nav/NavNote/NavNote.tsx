import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useGlobal } from '../../../../GlobalContext';
import styles from './NavNote.module.css';
import trashcanImg from '../../../../Resources/Img/trashcan.png';
import button from '../../../../Resources/CSS/button.module.css';

interface INavNoteProps {
  note: number;
}

const NavNote: FunctionComponent<INavNoteProps> = (props) => {

  const { global, setGlobal } = useGlobal();
  const [isCurrent, setIsCurrent] = useState(false);
  const notes = global.notes;
  const { note } = props;
  const inputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsCurrent(global.currentNote === note);
  }, [global.currentNote])

  const selectNote = () => {
    setGlobal({ ...global, currentNote: note });
  }

  const removeNote = () => {
    let newNotes = [...global.notes];
    newNotes.splice(note, 1);
    let newCurrentNote = global.currentNote - 1;
    setGlobal({ ...global, notes: newNotes, currentNote: newCurrentNote });
  }

  return (
    <div className={styles.this}>
      <div className={`${styles.bullet} ${styles['current' + isCurrent]}`}></div>
      <span ref={inputRef} className={`${styles.title} ${styles['current' + isCurrent]}`} onClick={selectNote}>{notes[note].title}</span>
      <button className={button.button} onClick={removeNote}><img src={trashcanImg} alt='delete'></img></button>
    </div>
  )
}
export default NavNote;