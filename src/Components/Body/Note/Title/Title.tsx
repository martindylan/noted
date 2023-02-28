import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import styles from './Title.module.css'

interface ITitleProps {
  children: ReactNode;
}

const Title: FunctionComponent<ITitleProps> = (props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.value = props.children ? props.children.toString() : 'Title';
    }
  }, [])

  return (
    <div className={styles.this}>
      <input ref={inputRef} type="text" placeholder='...' />
    </div>
  )
}
export default Title;