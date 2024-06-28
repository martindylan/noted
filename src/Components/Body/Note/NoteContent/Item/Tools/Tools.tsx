import React, { useState } from 'react';
import styles from './Tools.module.scss';
import button from '../../../../../../Resources/SASS/button.module.scss';
// Resources
import trashcanImg from '../../../../../../Resources/Img/trashcan.png';
import changeImg from '../../../../../../Resources/Img/change.png';
import moveImg from '../../../../../../Resources/Img/move.png'
import ItemTypeMenu from '../../../../../UI/ItemTypeMenu/ItemTypeMenu';
import { useGlobal } from '../../../../../../GlobalContext';
import { DraggableProvided } from '@hello-pangea/dnd';
import { ItemType } from '../../../../../../types';


type ToolsProps = {
  show: string;
  item: ItemType;
  index: number;
  provided: DraggableProvided;
  removeItem: (id: number) => void;
  changeType: (newType: string) => void;
}

const Tools = (props: ToolsProps) => {
  const [showChangeType, setShowChangeType] = useState(false);
  const { global } = useGlobal();
  const { show, item, index, provided, removeItem, changeType } = props;

  const remove = () => {
    removeItem(index);
  }

  const getType = (type: string) => {
    changeType(type);
  }

  const focusOut = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowChangeType(false);
    }
  }

  return (
    <div className={`${styles.Tools} ${styles[show]}`}>
      <button className={`${styles.clickable} ${button.button} ${styles.first} ${button[global.theme]}`} onClick={remove}><img className={`${button[global.theme]}`} src={trashcanImg} alt="delete" draggable="false"></img></button>
      <div className={styles.changeType} onBlur={focusOut}>
        <button className={`${styles.clickable} ${button.button} ${styles.second} ${button[global.theme]}`} onClick={(e) => setShowChangeType(true)}><img className={`${button[global.theme]}`} src={changeImg} alt="change" draggable="false"></img></button>
        <ItemTypeMenu visibility={showChangeType} changeType={changeType} item={item} index={index} />
      </div>
      <div {...provided.dragHandleProps} className={`${styles.draggable} ${button.button} ${styles.last} ${button[global.theme]}`}><img className={`${button[global.theme]}`} src={moveImg} alt="move" draggable="false"></img></div>
    </div>
  )
}
export default Tools;