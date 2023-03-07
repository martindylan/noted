import { FunctionComponent, useState } from 'react';
import ItemTypeMenu from '../../../../UI/ItemTypeMenu/ItemTypeMenu';
import styles from './AddItem.module.css';
import button from '../../../../../Resources/CSS/button.module.css';
import addImg from '../../../../../Resources/Img/add.png';

interface IAddItemProps {
  addItem: (type: string, pos: number | null) => void;
}

const AddItem: FunctionComponent<IAddItemProps> = (props) => {

  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(true);
  }

  const getItemType = (type: string, pos: number | null) => {
    if (type) props.addItem(type, null);
    setActive(false);
  }

  const focusOut = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActive(false);
    }
  }

  const keyDown = (e: any) => {
    if (e.key === 'Escape') {
      setActive(false);
    }
  }

  return (
    <div onBlur={focusOut} onKeyDown={keyDown} className={styles.this}>
      <button className={button.button} onClick={activate}><img src={addImg} alt='+'></img></button>
      <ItemTypeMenu sendTypeToParent={getItemType} visibility={active} id={null} fromTools={false} />
    </div>
  )
}

export default AddItem;