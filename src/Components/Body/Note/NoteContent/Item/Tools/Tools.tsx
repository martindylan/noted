import { FunctionComponent, useState } from 'react';
import styles from './Tools.module.css';
// Resources
import trashcanImg from '../../../../../../Resources/Img/trashcan.png';
import changeImg from '../../../../../../Resources/Img/change.png';
import moveImg from '../../../../../../Resources/Img/move.png'
import ItemTypeMenu from '../../../../../UI/ItemTypeMenu/ItemTypeMenu';

type ToolsProps = {
  visibility: string;
  id: number;
  removeItem: (id: number) => void;
}

const Tools: FunctionComponent<ToolsProps> = (props) => {

  const [displayChange, setdisplayChange] = useState(false);
  const id = props.id;

  const remove = () => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) props.removeItem(id);
  }

  const changeType = (type: string | null) => {
    
  }

  return (
    <div className={`${styles.this} ${styles[props.visibility]}`}>
      <button className={styles.clickable} onClick={remove}><img className={styles.first} draggable="false" src={trashcanImg} alt="delete"></img></button>
      {displayChange && <ItemTypeMenu sendTypeToParent={changeType} id={id} />}
      <button className={styles.clickable} onClick={(e) => setdisplayChange(true)}><img className={styles.second} draggable="false" src={changeImg} alt="change"></img></button>
      <button className={styles.draggable} onClick={(e) => console.log("move item")}><img className={styles.last} draggable="false" src={moveImg} alt="move"></img></button>
    </div>
  )
}
export default Tools;