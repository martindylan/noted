import { FunctionComponent, useState } from 'react'
import ItemTypeMenu from '../../../../UI/ItemTypeMenu/ItemTypeMenu';
import styles from './AddItem.module.css'

interface IAddItemProps {
  addItem: (type: string | null, pos: number | null) => void;
}

const AddItem: FunctionComponent<IAddItemProps> = (props) => {

  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(true);
  }

  const getItemType = (type: string | null, pos: number | null) => {
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
      <button className={styles.add} onClick={activate}>+</button>
      {active && <ItemTypeMenu sendTypeToParent={getItemType} id={null} />}
    </div>
  )
}

export default AddItem;