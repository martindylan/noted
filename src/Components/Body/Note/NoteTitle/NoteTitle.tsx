import { FunctionComponent, useEffect, useRef, useCallback } from 'react'
import { useNote } from '../NoteContext';
import styles from './NoteTitle.module.css';
import inputTextBox from '../../../../Resources/CSS/inputTextBox.module.css';

const NoteTitle: FunctionComponent = () => {

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { note, setNote } = useNote();
  const title = note.title;
  
  // When mounting the component:
  // Set input's inner text according to the title object
  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.value = title ? title : '';
    }
    resize();
  }, [])

  // Updates the items object according to input's inner text
  const updateItems = useCallback((e: any) => {
    let newTitle = note.title;
    newTitle = e.target.value;
    setNote({ ...note, title: newTitle });
    resize();
  }, [note, setNote]);

  // Set width and height of textarea
  const resize = () => {
    const input = inputRef.current;
    if (input) {
      input.style.width = input.value.length + 'ch';
      input.style.height = 'auto';
      input.style.height = `calc(${input.scrollHeight}px - 0.75ch`;
    };
  }

  // Set input's event listener for input, on event calls updateItems();
  useEffect(() => {
    const input = inputRef.current;
    input?.addEventListener('input', updateItems);
    return () => {
      input?.removeEventListener('input', updateItems);
    }
  }, [updateItems])

  return (
    <div className={`${styles.this}`}>
      <textarea rows={1} ref={inputRef} className={`${styles.input} ${inputTextBox.inputTextBox}`} placeholder='...'></textarea>
    </div>
  )
}
export default NoteTitle;