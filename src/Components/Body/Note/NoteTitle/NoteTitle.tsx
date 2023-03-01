import { FunctionComponent, useEffect, useRef } from 'react'
import { useContent } from '../ContentContext';
import styles from './NoteTitle.module.css'

const NoteTitle: FunctionComponent = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const { content } = useContent();
  const title = content.title;

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.innerText = title ? title.toString() : 'Title';
    }
  }, [title])

  return (
    <div className={styles.this}>
      <span ref={inputRef} className={styles.text} contentEditable></span>
    </div>
  )
}
export default NoteTitle;