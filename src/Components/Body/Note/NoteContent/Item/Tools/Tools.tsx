import { FunctionComponent, useState } from 'react';
import styles from './Tools.module.css';
import button from '../../../../../../Resources/CSS/button.module.css';
// Resources
import trashcanImg from '../../../../../../Resources/Img/trashcan.png';
import changeImg from '../../../../../../Resources/Img/change.png';
import moveImg from '../../../../../../Resources/Img/move.png'
import ItemTypeMenu from '../../../../../UI/ItemTypeMenu/ItemTypeMenu';

type ToolsProps = {
  visibility: string;
  id: number;
  removeItem: (id: number) => void;
  changeType: (newType: string) => void;
}

const Tools: FunctionComponent<ToolsProps> = (props) => {

  const [displayChange, setDisplayChange] = useState(false);
  const id = props.id;

  const remove = () => {
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) props.removeItem(id);
  }

  const getType = (type: string) => {
    props.changeType(type);
  }

  const focusOut = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDisplayChange(false);
    }
  }

  return (
    <div className={`${styles.this} ${styles[props.visibility]}`}>
      <button className={`${styles.clickable} ${button.button}`} onClick={remove}><img className={styles.first} draggable="false" src={trashcanImg} alt="delete"></img></button>
      <div className={styles.changeType} onBlur={focusOut}>
        <button className={`${styles.clickable} ${button.button}`} onClick={(e) => setDisplayChange(true)}><img className={styles.second} draggable="false" src={changeImg} alt="change"></img></button>
        <ItemTypeMenu visibility={displayChange} sendTypeToParent={getType} id={id} />
      </div>
      <button className={`${styles.draggable} ${button.button}`} onClick={(e) => console.log("move item")}><img className={styles.last} draggable="false" src={moveImg} alt="move"></img></button>
    </div>
  )
}
export default Tools;