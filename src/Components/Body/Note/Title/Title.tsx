import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import { useItems } from '../../../../ItemsContext';
import styles from './Title.module.css'

interface ITitleProps {
  children: ReactNode;
  note: number;
}

const Title: FunctionComponent<ITitleProps> = (props) => {

  const { notes, setNotes } = useItems();
  const { note } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultValue = "Title";

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.value = notes[note].title;
    }
  }, [])

  return (
    <div className={styles.this}>
      <input ref={inputRef} type="text" placeholder='...' />
    </div>
  )
}
export default Title;