import { FunctionComponent } from 'react';
import styles from './Tools.module.css';
// Resources
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
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) props.removeItem(props.id);
  }

  return (
    <div className={`${styles.this} ${styles[props.visibility]}`}>
      <button className={styles.clickable} onClick={remove}><img className={styles.first} draggable="false" src={trashcanImg} alt="delete"></img></button>
      <button className={styles.clickable} onClick={(e) => console.log("change item")}><img className={styles.second} draggable="false" src={changeImg} alt="change"></img></button>
      <button className={styles.draggable} onClick={(e) => console.log("move item")}><img className={styles.last} draggable="false" src={moveImg} alt="move"></img></button>
    </div>
  )
}
export default Tools;