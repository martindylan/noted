import { FunctionComponent } from 'react';
import styles from './Tools.module.css';
import trashcanImg from './img/trashcan.png';
import changeImg from './img/change.png';
import moveImg from './img/move.png'

type ToolsProps = {
  visibility: string;
  id: number;
  removeItem: (id: number) => void;
}

const Tools: FunctionComponent<ToolsProps> = (props) => {

  const remove = () => {
    props.removeItem(props.id);
  }

  return (
    <div className={[styles.this, styles[props.visibility]].join(' ')}>
      <button className={styles.clickable} onClick={remove}><img draggable="false" src={trashcanImg} alt="delete"></img></button>
      <button className={styles.clickable} onClick={(e) => console.log("change item")}><img draggable="false" src={changeImg} alt="change"></img></button>
      <button className={styles.draggable} onClick={(e) => console.log("move item")}><img draggable="false" src={moveImg} alt="move"></img></button>
    </div>
  )
}
export default Tools;