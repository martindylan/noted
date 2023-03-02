import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { useGlobal } from '../../../../GlobalContext';
import styles from './NavNote.module.css'
import trashcanImg from '../../Note/NoteContent/Item/Tools/img/trashcan.png'

interface INavNoteProps {
  note: number;
}

const NavNote: FunctionComponent<INavNoteProps> = (props) => {

  const { global, setGlobal } = useGlobal();
  const [isCurrent, setIsCurrent] = useState(false);
  const notes = global.notes;
  const inputRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setIsCurrent(global.currentNote === props.note);
  }, [global.currentNote])

  const selectNote = () => {
    setGlobal({ ...global, currentNote: props.note });
  }

  return (
    <div className={styles.this}>
      <div className={`${styles.bullet} ${styles['current'+isCurrent]}`}></div>
      {/* <img src={trashcanImg} alt='delete'></img> */}
      <span ref={inputRef} className={`${styles.title} ${styles['current'+isCurrent]}`} onClick={selectNote}>{notes[props.note].title}</span>
    </div>
  )
}
export default NavNote;