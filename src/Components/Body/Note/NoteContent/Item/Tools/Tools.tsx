import { FunctionComponent, useState } from 'react';
import styles from './Tools.module.scss';
import button from '../../../../../../Resources/SASS/button.module.scss';
// Resources
import trashcanImg from '../../../../../../Resources/Img/trashcan.png';
import changeImg from '../../../../../../Resources/Img/change.png';
import moveImg from '../../../../../../Resources/Img/move.png'
import ItemTypeMenu from '../../../../../UI/ItemTypeMenu/ItemTypeMenu';
import { useGlobal } from '../../../../../../GlobalContext';


type ToolsProps = {
  visibility: string;
  id: number;
  removeItem: (id: number) => void;
  changeType: (newType: string) => void;
}

const Tools: FunctionComponent<ToolsProps> = (props) => {

  const [showChangeType, setShowChangeType] = useState(false);
  const { global } = useGlobal();
  const id = props.id;

  const remove = () => {
    props.removeItem(id);
  }

  const getType = (type: string) => {
    props.changeType(type);
  }

  const focusOut = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowChangeType(false);
    }
  }

  const drag = (e: any) => {
    e.dataTransfer.setData('text/plain', 'itemId:' + id);
  }

  return (
    <div className={`${styles.Tools} ${styles[props.visibility]}`}>
      <button className={`${styles.clickable} ${button.button} ${styles.first} ${button[global.theme]}`} onClick={remove}><img className={`${button[global.theme]}`} draggable="false" src={trashcanImg} alt="delete"></img></button>
      <div className={styles.changeType} onBlur={focusOut}>
        <button className={`${styles.clickable} ${button.button} ${styles.second} ${button[global.theme]}`} onClick={(e) => setShowChangeType(true)}><img className={`${button[global.theme]}`} draggable="false" src={changeImg} alt="change"></img></button>
        <ItemTypeMenu visibility={showChangeType} sendTypeToParent={getType} id={id} fromTools={true} />
      </div>
      {window.screen.width >= 768 &&
        <button draggable onDragStart={drag} className={`${styles.draggable} ${button.button} ${styles.last} ${button[global.theme]}`}><img className={`${button[global.theme]}`} draggable="false" src={moveImg} alt="move"></img></button>
      }
    </div>
  )
}
export default Tools;