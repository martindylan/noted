import { FunctionComponent } from 'react';
import Content from './Content/Content';
import Title from './Title/Title';
import styles from './Note.module.css';
import { useItems } from '../../../ItemsContext';

interface INoteProps {
  note: number;
  title: string;
}

const Note: FunctionComponent<INoteProps> = (props) => {

  const { notes } = useItems();
  return (
    <div className={styles.this}>
      <Title note={props.note}>{props.title}</Title>
      <Content></Content>
    </div>
  )
}
export default Note;