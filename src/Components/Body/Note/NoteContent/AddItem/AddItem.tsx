import { useState } from 'react';
import ItemTypeMenu from 'Components/UI/ItemTypeMenu/ItemTypeMenu';
import styles from './AddItem.module.scss';
import button from 'Resources/SASS/button.module.scss';
import addImg from 'Resources/Img/add.png';
import { useGlobal } from 'GlobalContext';

interface IAddItemProps {
  addItem: (type: string) => void;
}

const AddItem = (props: IAddItemProps) => {

  const [active, setActive] = useState(false);
  const { global } = useGlobal();

  const activate = () => {
    setActive(true);
  }

  const getItemType = (type: string) => {
    props.addItem(type);
    setActive(false);
  }

  const focusOut = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setActive(false);
    }
  }

  const keyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      setActive(false);
    }
  }

  return (
    <div onBlur={focusOut} onKeyDown={keyDown} className={styles.AddItem}>
      <button className={`${button.button} ${button[global.theme]}`} onClick={activate}><img className={button[global.theme]} src={addImg} alt='+'></img></button>
      <ItemTypeMenu changeType={getItemType} visibility={active} item={null} index={null} />
    </div>
  )
}

export default AddItem;