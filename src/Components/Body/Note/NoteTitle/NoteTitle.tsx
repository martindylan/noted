import { FunctionComponent, useEffect, useRef, useCallback } from 'react'
import { useNote } from '../NoteContext';
import styles from './NoteTitle.module.css'

const NoteTitle: FunctionComponent = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const { note, setNote } = useNote();
  const title = note.title;
  
  // When mounting the component:
  // Set input's inner text according to the title object
  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.innerText = title ? title.toString() : '';
    }
  }, [])

  // Updates the items object according to input's inner text
  const updateItems = useCallback((e: any) => {
    let newTitle = note.title;
    newTitle = e.target.innerText;
    setNote({ ...note, title: newTitle });
  }, [note, setNote]);

  // Set input's event listener for input, on event calls updateItems();
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    return () => {
      input?.removeEventListener('input', updateItems);
    }
  }, [updateItems])

  return (
    <div className={styles.this}>
      <span ref={inputRef} className={styles.text} contentEditable></span>
    </div>
  )
}
export default NoteTitle;