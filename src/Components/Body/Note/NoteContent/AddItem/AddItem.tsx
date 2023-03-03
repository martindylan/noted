import { FunctionComponent, useState } from 'react'
import ItemTypeMenu from '../ItemTypeMenu/ItemTypeMenu';
import styles from './AddItem.module.css'

interface IAddItemProps {
  addItem: (type: string) => void;
}

const AddItem: FunctionComponent<IAddItemProps> = (props) => {

  const [active, setActive] = useState(false);

  const activate = () => {
    setActive(true);
  }

  const getItemType = (type: string | null) => {
    if (type) props.addItem(type);
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
  console.log("additem render")
  return (
    <div onBlur={focusOut} onKeyDown={keyDown} className={styles.this}>
      <button className={styles.add} onClick={activate}>+</button>
      {active && <ItemTypeMenu sendTypeToParent={getItemType} />}
    </div>
  )
}

export default AddItem;