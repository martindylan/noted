import { FunctionComponent } from 'react';
import styles from './ItemTypeMenu.module.css';
import text from './img/text.png';
import heading from './img/heading.png';
import bulleted from './img/bulleted.png';
import checkbox from './img/checkbox.png';

interface IItemTypeMenu {
  sendTypeToParent: (type: string | null, pos: number | null) => void;
  id: number | null;
}

const ItemTypeMenu: FunctionComponent<IItemTypeMenu> = (props) => {

  const sendTypeToParent = props.sendTypeToParent;
  const id = props.id;

  return (
    <div className={styles.this}>
      <div className={styles.row}>
        <button onClick={() => sendTypeToParent('text', id ? id : null)}><img src={text} alt='text' draggable="false" /></button>
        <button onClick={() => sendTypeToParent('heading', id ? id : null)}><img src={heading} alt='heading' draggable="false" /></button>
      </div>
      <div className={styles.row}>
        <button onClick={() => sendTypeToParent('bulleted', id ? id : null)}><img src={bulleted} alt='bulleted' draggable="false" /></button>
        <button onClick={() => sendTypeToParent('checkbox', id ? id : null)}><img src={checkbox} alt='checkbox' draggable="false" /></button>
      </div>
    </div>
  )
}
export default ItemTypeMenu;